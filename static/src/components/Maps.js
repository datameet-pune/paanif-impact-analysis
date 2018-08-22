import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/filter';
import BeforeMap from '../components/beforeMap';
import { bindActionCreators } from 'redux';

class Map extends Component {
  render() {
    return (
      <div className="row map-wrapper">
        <div className="map-header col-sm-12">
          <div className="table-title">
            {this.props.village
              ? 'Village ' +
                this.props.village.villageName +
                ' (' +
                this.props.village.villageCode +
                ') - ' +
                this.props.mapType.mapTypeLabel +
                ' Maps'
              : 'Maharashtra - ' + this.props.mapType.mapTypeLabel + ' Maps'}
          </div>
        </div>
        <Filter />
        <BeforeMap id="before" year="before" />
        <BeforeMap id="after" year="after" />
        <div id="map_desc" className="map-desc col-sm-12">
          <div> This is a descriptive text for the Maps</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ mapType, village }) {
  return { mapType, village };
}

export default connect(mapStateToProps)(Map);
