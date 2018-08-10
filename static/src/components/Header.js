import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // conyear === 'before'
  //   ? this.props.timePeriod.startYear +
  //     '-' +
  //     (this.props.timePeriod.startYear + 1)
  //   : this.props.timePeriod.endYear +
  //     '-' +
  //     (this.props.timePeriod.endYear + 1);
  render() {
    let timePeriod = null;
    if (this.props.timePeriod) {
      timePeriod = (
        <span>
          {this.props.timePeriod.startYear +
            '-' +
            this.props.timePeriod.endYear}
        </span>
      );
    }
    return (
      <div className="row app-header">
        <div className="col-sm-6 col-6 col-lg-2 text-center">
          <a className="navbar-brand" href="#">
            <div className="paani-logo logo" />
          </a>
        </div>
        <div className="col-sm-6 col-6 d-lg-none text-right">
          <a className="navbar-brand" href="#">
            <div className="datameet-logo logo" />
          </a>
        </div>

        <div className="col-12 col-sm-12 col-lg-8 text-center ">
          <div className="header-title">
            <span>Impact Analysis Water Cup </span>
            {timePeriod}
          </div>
        </div>
        <div className="col-sm-6 col-6 col-lg-2 text-center d-none d-lg-block">
          <a className="navbar-brand" href="#">
            <div className="datameet-logo logo" />
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ timePeriod }) {
  return { timePeriod };
}

export default connect(mapStateToProps)(Header);
