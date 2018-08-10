import $ from 'jquery';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Header from '../components/header';

import Landing from '../components/Landing';
import LoginPage from '../components/Login';

import * as actions from '../actions';

// import Footer from '../components/footer';

class App extends Component {
  loggedIn() {
    const loggedIn = sessionStorage.getItem('paani-auth');
    return loggedIn || this.props.auth;
  }

  requireAuth(nextState, replace) {
    if (!loggedIn()) {
      replace({
        pathname: '/login'
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            path="/"
            render={() =>
              !this.loggedIn() ? <Redirect to="/login" /> : <Landing />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
