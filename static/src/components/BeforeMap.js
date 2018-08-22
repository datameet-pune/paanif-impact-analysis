import $ from 'jquery';
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import config from '../config';
import { updateMapCenter } from '../actions/index';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: null
    };
  }
  componentDidMount() {
    let mapTiles = this.getMapTiles();
    const myLatLng = new google.maps.LatLng(19.7515, 75.7139);

    const mapOptions = {
      center: myLatLng,
      zoom: 7,
      maxZoom: 14,
      streetViewControl: false,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    };

    // Create the base Google Map.
    this.map1 = new google.maps.Map(
      this.refs.map1,
      // document.getElementById('map1'),
      mapOptions
    );
    //
    // const map2 = new google.maps.Map(document.getElementById('map2'), mapOptions);

    const imageMapType = new google.maps.ImageMapType({
      getTileUrl: (coord, zoom) => {
        const proj = this.map1.getProjection();
        const z2 = Math.pow(2, zoom);
        const tileXSize = 256 / z2;
        const tileYSize = 256 / z2;
        const tileBounds = new google.maps.LatLngBounds(
          proj.fromPointToLatLng(
            new google.maps.Point(
              coord.x * tileXSize,
              (coord.y + 1) * tileYSize
            )
          ),
          proj.fromPointToLatLng(
            new google.maps.Point(
              (coord.x + 1) * tileXSize,
              coord.y * tileYSize
            )
          )
        );
        // Flip the Y value
        // var ymax = 1 << zoom;
        // var Y = ymax - coord.y - 1;
        // return 'http://storage.googleapis.com/sample-map-export/mapToCloudExample/{z}/{x}/{y}.png'
        //   .replace('{z}', zoom)
        //   .replace('{x}', coord.x)
        //   .replace('{y}', Y);
        return mapTiles
          .replace('{z}', zoom)
          .replace('{x}', coord.x)
          .replace('{y}', coord.y);
      },
      tileSize: new google.maps.Size(256, 256),
      minZoom: 1,
      maxZoom: 14,
      name: 'Tiles',
      opacity: 0.8
    });
    // Add the EE layer to the map.
    this.map1.overlayMapTypes.push(imageMapType);
    // this.map1.overlayMapTypes.getAt(0).setOpacity(0.5);

    // const villCode = villageData.filter(function(village) {
    //   return village.id % 2 == 0;
    // });

    this.map1.data.setStyle({
      strokeWeight: 3,
      strokeColor: '#328daa',
      fillOpacity: 0.1
      // ,fillColor: 'red'
    });
    this.updateLegend();
    this.updateMapDesc();

    const self = this;

    this.syncMapSettings();

    google.maps.event.addListener(this.map1, 'dragend', function() {
      self.syncMapSettings();
    });

    google.maps.event.addListener(this.map1, 'zoom_changed', function() {
      self.syncMapSettings();
    });
  }
  getMapTiles() {
    let mapTiles;
    let year;
    let wcEdition = this.props.wcEdition ? 'wc' + this.props.wcEdition : 'wc1';
    if (this.props.year === 'before') {
      if (this.props.mapType.mapType === 'LandUse') {
        year = this.props.timePeriod.startYear - 10;
        mapTiles =
          config['MapTiles'][this.props.mapType.mapTypeVal][wcEdition][year];
      } else {
        year =
          this.props.timePeriod.startYear +
          '-' +
          (this.props.timePeriod.startYear + 1);
        mapTiles =
          config['MapTiles'][this.props.mapType.mapTypeVal][wcEdition][
            this.props.timePeriod.startYear
          ];
      }
    } else {
      if (this.props.mapType.mapType === 'LandUse') {
        year = this.props.timePeriod.startYear;
        mapTiles =
          config['MapTiles'][this.props.mapType.mapTypeVal][wcEdition][year];
      } else {
        year =
          this.props.timePeriod.endYear +
          '-' +
          (this.props.timePeriod.endYear + 1);
        mapTiles =
          config['MapTiles'][this.props.mapType.mapTypeVal][wcEdition][
            this.props.timePeriod.endYear
          ];
      }
    }
    this.setState({ year });

    return mapTiles;
  }

  updateMapTiles() {
    let mapTiles = this.getMapTiles();
    const imageMapType = new google.maps.ImageMapType({
      getTileUrl: (coord, zoom) => {
        const proj = this.map1.getProjection();
        const z2 = Math.pow(2, zoom);
        const tileXSize = 256 / z2;
        const tileYSize = 256 / z2;
        const tileBounds = new google.maps.LatLngBounds(
          proj.fromPointToLatLng(
            new google.maps.Point(
              coord.x * tileXSize,
              (coord.y + 1) * tileYSize
            )
          ),
          proj.fromPointToLatLng(
            new google.maps.Point(
              (coord.x + 1) * tileXSize,
              coord.y * tileYSize
            )
          )
        );

        return mapTiles
          .replace('{z}', zoom)
          .replace('{x}', coord.x)
          .replace('{y}', coord.y);
      }
    });
    this.map1.overlayMapTypes.removeAt(0);
    this.map1.overlayMapTypes.setAt(0, imageMapType);
    this.map1.overlayMapTypes.getAt(0).setOpacity(this.props.opacity);
    this.updateLegend();
    this.updateMapDesc();
  }

  syncMapSettings() {
    this.lat = this.map1.getCenter().lat();
    this.lng = this.map1.getCenter().lng();
    this.zoomLevel = this.map1.getZoom();
    this.props.updateMapCenter({
      lat: this.lat,
      lng: this.lng,
      zoomLevel: this.zoomLevel
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // this.map1.data.loadGeoJson(
    //   'static/src/data/geometry/wc12_sample121_vlgcd2011__' +
    //     this.props.village +
    //     '.geojson'
    // );
    if (
      prevProps.mapType.mapTypeVal !== this.props.mapType.mapTypeVal ||
      prevProps.wcEdition !== this.props.wcEdition
    ) {
      let year;

      if (this.props.mapType.mapTypeVal === 'LandUse') {
        if (this.props.year === 'before') {
          year = this.props.timePeriod.startYear - 10;
        } else {
          year = this.props.timePeriod.startYear;
        }
      } else {
        year =
          this.props.year === 'before'
            ? this.props.timePeriod.startYear +
              '-' +
              (this.props.timePeriod.startYear + 1)
            : this.props.timePeriod.endYear +
              '-' +
              (this.props.timePeriod.endYear + 1);
      }

      this.setState({ year }, () => {
        this.updateMapTiles();
      });
    }
    if (prevProps.opacity !== this.props.opacity) {
      this.map1.overlayMapTypes.getAt(0).setOpacity(this.props.opacity);
    }
    const self = this;

    // Load the GeoJSON manually (works cross-origin since google sets the required HTTP headers)
    if (
      this.props.village &&
      this.villageCode !== this.props.village.villageCode
    ) {
      // $.getJSON(
      //   'static/src/data/geometry/wc12_sample121_vlgcd2011__' +
      //     this.props.village.villageCode +
      //     '.geojson',
      $.getJSON(
        'static/src/data/geojsons/vlgcd2011__' +
          this.props.village.villageCode +
          '.geojson',
        function(data) {
          if (self.dataLayer) {
            for (var i = 0; i < self.dataLayer.length; i++)
              self.map1.data.remove(self.dataLayer[i]);
          }
          self.dataLayer = self.map1.data.addGeoJson(data);
          self.syncMapSettings();
        }
      );
      // $.ajax({
      //   type: 'GET',
      //   url: '/geojson',
      //   contentType: 'application/json',

      // success: function(data) {
      //   if (self.dataLayer) {
      //     for (var i = 0; i < self.dataLayer.length; i++)
      //       self.map1.data.remove(self.dataLayer[i]);
      //   }
      //   self.dataLayer = self.map1.data.addGeoJson(data.response);
      //   self.syncMapSettings();
      // }
      // });
      google.maps.event.addListener(this.map1.data, 'addfeature', function(e) {
        if (e.feature.getGeometry().getType() === 'Polygon') {
          var bounds = new google.maps.LatLngBounds();
          e.feature
            .getGeometry()
            .getArray()
            .forEach(function(path) {
              path.getArray().forEach(function(latLng) {
                bounds.extend(latLng);
              });
            });
          e.feature.setProperty('bounds', bounds);
          self.map1.fitBounds(bounds);
        }
      });
      this.villageCode = this.props.village.villageCode;
    }

    if (
      this.props.mapCenter.lat !== this.lat ||
      this.props.mapCenter.lng != this.lng ||
      this.props.mapCenter.zoomLevel != this.zoomLevel
    ) {
      this.lat = this.props.mapCenter.lat;
      this.lng = this.props.mapCenter.lng;
      this.zoomLevel = this.props.mapCenter.zoomLevel;
      this.map1.setCenter(
        new google.maps.LatLng(
          this.props.mapCenter.lat,
          this.props.mapCenter.lng
        )
      );
      this.map1.setZoom(this.props.mapCenter.zoomLevel);
    }
  }

  titleCase(str) {
    // return _.upperFirst(_.toLower(str));
    return _.startCase(_.toLower(str));
  }

  updateMapDesc() {
    const descDiv = document.getElementById('map_desc');
    descDiv.innerHTML = '';
    let mapDesc = '';
    if (this.props.mapType.mapType === 'SoilMoistureIndex') {
      mapDesc = config.MapInfo[this.props.mapType.mapTypeVal].Description;
    } else {
      mapDesc = config.MapInfo[this.props.mapType.mapType].Description;
    }
    descDiv.innerHTML = mapDesc;
  }

  updateLegend() {
    let legend = document.getElementById(this.props.id + '_legend');
    legend.innerHTML = '';
    let legendConfig;
    if (this.props.mapType.mapType === 'SoilMoistureIndex') {
      legendConfig = config.MapInfo[this.props.mapType.mapTypeVal].Legend;
    } else {
      legendConfig = config.MapInfo[this.props.mapType.mapType].Legend;
    }

    for (var key in legendConfig) {
      // var type = icons[key];
      var name = key;
      var color = legendConfig[key];
      var div = document.createElement('div');
      div.innerHTML =
        '<span class="color" style="background-color: ' +
        color +
        '"> </span><span>' +
        name +
        '</span>';
      legend.appendChild(div);
    }
    this.map1.controls[google.maps.ControlPosition.RIGHT_BOTTOM].clear();

    this.map1.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
  }
  render() {
    // const startYear = this.props.timePeriod.startYear;
    // const endYear = this.props.timePeriod.endYear;
    // const timePeriod =
    //   this.props.year === 'before'
    //     ? startYear + '-' + endYear
    //     : endYear + '-' + (endYear + 1);

    // const { opacity } = this.state;
    return (
      <div className="col-sm-6 before-wrapper">
        <div id={this.props.id}>{this.state.year}</div>

        <div id="map1" className={'map_' + this.props.id} ref="map1" />
        <div id={this.props.id + '_legend'} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateMapCenter
    },
    dispatch
  );
}

function mapStateToProps({
  wcEdition,
  village,
  mapType,
  mapCenter,
  timePeriod,
  opacity
}) {
  return { wcEdition, village, mapType, mapCenter, timePeriod, opacity };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
