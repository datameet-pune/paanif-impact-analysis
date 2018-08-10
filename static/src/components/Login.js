import $ from 'jquery';
import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import sjcl from 'sjcl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      successUser: null,
      successPass: null
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const authPayload = {
      user: this.state.user,
      pass: sjcl.encrypt('asdlkashdl', this.state.pass)
    };

    this.props.authenticateUser(authPayload).then(
      (a, b) => {
        if (a.payload.data.auth === false) {
          if (a.payload.data.error === 'user') {
            this.setState({ successUser: a.payload.data.auth });
          } else {
            this.setState({ successPass: a.payload.data.auth });
          }
        } else {
          this.setState({
            successUser: a.payload.data.auth,
            successPass: a.payload.data.auth
          });
          sessionStorage.setItem('paani-auth', true);

          this.props.history.push('/');
        }
      },
      () => {}
    );
  }

  handleChangeUser(event) {
    this.setState({ user: event.target.value });
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const errorAttr = this.state.success === false ? true : false;

    return (
      <div className="container-fluid login-container">
        <div className="row col-sm-12">
          <form
            onSubmit={this.handleSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <content className="auth-text">
              This is a password-protected application. Please enter username
              and password.
            </content>
            <TextField
              id="username-input"
              label="Username"
              error={this.state.successUser === false ? true : false}
              className={classes.textField}
              margin="dense"
              onChange={this.handleChangeUser}
              helperText={
                this.state.successUser === false ? 'Incorrect Username' : ''
              }
            />
            <TextField
              id="password-input"
              label="Password"
              error={this.state.successPass === false ? true : false}
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="dense"
              onChange={this.handleChangePass}
              helperText={
                this.state.successPass === false ? 'Incorrect Password' : ''
              }
            />
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default withStyles(styles)(connect(mapStateToProps, actions)(Login));
