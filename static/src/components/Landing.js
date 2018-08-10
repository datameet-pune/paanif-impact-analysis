import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Maps from '../components/Maps';
import Table from '../components/ReactTable';
import ButtonPanel from '../components/buttonPanel';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchWCEditions();
  }

  render() {
    return (
      <div className="container-fluid">
        <Maps />
        <Table />
        <ButtonPanel />
      </div>
    );
  }
}

export default connect(null, actions)(Landing);
