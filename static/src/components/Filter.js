import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/lab/Slider';

import {
  updateWCEdition,
  updateDistrict,
  updateTehsil,
  updateVillage,
  updateMapType,
  updatePeriod,
  fetchWCEditions,
  fetchDistricts,
  fetchTehsils,
  fetchVillages,
  updateOpacity
} from '../actions/index';

const styles = {
  root: {
    // display: 'flex',
    width: '85%'
  }
};
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWCEdition: null,
      selectedDistrict: '',
      selectedTehsil: '',
      selectedVillage: '',
      selectedMapType: { value: 'LandUse', label: 'Land Use' },
      startYear: 2016,
      endYear: 2017,
      wcEditionList: [],
      districtList: [],
      tehsilList: [],
      villageList: [],
      opacity: 0.8
    };

    this.waterCupEditionYears = {
      1: 2016,
      2: 2017,
      3: 2018
    };

    this.props.updateMapType({
      mapTypeVal: 'LandUse',
      mapType: 'LandUse',
      mapTypeSeason: '',
      mapTypeLabel: 'Land Use'
    });

    this.props.updatePeriod({
      startYear: this.state.startYear,
      endYear: this.state.endYear
    });

    this.onWCEditionChange = this.onWCEditionChange.bind(this);
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onTehsilChange = this.onTehsilChange.bind(this);
    this.onVillageChange = this.onVillageChange.bind(this);
    this.onMapTypeChange = this.onMapTypeChange.bind(this);
    this.getVillageList = this.getVillageList.bind(this);
    this.getDistrictList = this.getDistrictList.bind(this);
    this.getTehsilList = this.getTehsilList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.getDistrictList();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.selectedWCEdition) {
      this.getWCEditionsList();
    }
    if (
      this.state.selectedWCEdition &&
      (prevProps.districtList.length === 0 ||
        (prevProps.districtList.length > 0 &&
          prevProps.districtList.length !== this.props.districtList.length))
    ) {
      this.getDistrictList();
    }
    if (
      this.state.selectedDistrict &&
      (prevProps.tehsilList.length === 0 ||
        (prevProps.tehsilList.length > 0 &&
          prevProps.tehsilList[0].value !== this.props.tehsilList[0].value))
    ) {
      this.getTehsilList();
    }
    if (
      this.state.selectedTehsil &&
      (prevProps.villageList.length === 0 ||
        (prevProps.villageList.length > 0 &&
          prevProps.villageList[0].value !== this.props.villageList[0].value))
    ) {
      this.getVillageList();
    }

    // if (this.state.selectedDistrict && prevState.selectedDistrict !== this.state.selectedDistrict) {
    //   this.getTehsilList();
    // }
    // if (prevState.selectedTehsil !== this.state.selectedTehsil) {
    //   this.getVillageList();
    // }

    // const tehsilList = this.props.tehsilList;

    // this.setState({ tehsilList });
  }

  onWCEditionChange(selectedWCEdition) {
    this.setState(
      {
        selectedWCEdition: selectedWCEdition.value,
        startYear: this.waterCupEditionYears[selectedWCEdition.value],
        endYear: this.waterCupEditionYears[selectedWCEdition.value] + 1
      },
      () => {
        this.props.updatePeriod({
          startYear: this.state.startYear,
          endYear: this.state.endYear
        });
        this.props.fetchDistricts(this.state.selectedWCEdition);
      }
    );
    this.props.updateWCEdition({
      wcEdition: selectedWCEdition.value
    });
  }

  onDistrictChange(selectedDistrict) {
    this.setState({ selectedDistrict: selectedDistrict.value }, () => {
      this.props.fetchTehsils(
        this.state.selectedWCEdition,
        this.state.selectedDistrict
      );
    });
    this.props.updateDistrict({
      district: selectedDistrict.value
    });
  }
  onTehsilChange(selectedTehsil) {
    this.setState({ selectedTehsil: selectedTehsil.value }, () => {
      this.props.fetchVillages(
        this.state.selectedWCEdition,
        this.state.selectedDistrict,
        this.state.selectedTehsil
      );
    });
    this.props.updateTehsil({
      tehsil: selectedTehsil.label
    });
  }
  onVillageChange(selectedVillage) {
    this.setState({ selectedVillage });
    this.props.updateVillage({
      villageCode: selectedVillage.value,
      villageName: selectedVillage.label
    });
  }
  onMapTypeChange(selectedMapType) {
    this.setState({ selectedMapType });
    this.props.updateMapType({
      mapTypeVal: selectedMapType.value,
      mapType: selectedMapType.type,
      mapTypeSeason: selectedMapType.season,
      mapTypeLabel: selectedMapType.label
    });
  }

  getVillageList() {
    if (this.props.villageList.length > 0) {
      const selectedVillage = this.props.villageList[0].value;
      // this.setState({ selectedDistrict });
      this.setState(
        {
          selectedVillage: selectedVillage,
          villageList: this.props.villageList
        },
        () => {
          this.onVillageChange(this.props.villageList[0]);
        }
      );
    }
  }

  getWCEditionsList() {
    let wcEditionList = [];
    // districtList = this.props.districtList;

    if (
      this.state.wcEditionList.length === 0 &&
      this.props.wcEditionList.length > 0
    ) {
      const selectedWCEdition = this.props.wcEditionList[0];
      // this.setState({ selectedDistrict });
      this.setState(
        {
          selectedWCEdition: selectedWCEdition.value,
          wcEditionList: this.props.wcEditionList,
          startYear: this.waterCupEditionYears[selectedWCEdition.value],
          endYear: this.waterCupEditionYears[selectedWCEdition.value] + 1
        },
        () => {
          this.props.updateWCEdition({
            wcEdition: this.state.selectedWCEdition
          });
          this.props.updatePeriod({
            startYear: this.state.startYear,
            endYear: this.state.endYear
          });
          this.props.fetchDistricts(this.state.selectedWCEdition);
        }
      );
    }

    return wcEditionList;
  }

  getDistrictList() {
    let districtList = [];
    // districtList = this.props.districtList;

    if (
      // (this.state.districtList.length === 0 &&
      //   this.props.districtList.length > 0) ||
      this.state.districtList.length !== this.props.districtList.length
    ) {
      const selectedDistrict = this.props.districtList[0].value;
      // this.setState({ selectedDistrict });
      this.setState(
        {
          selectedDistrict: selectedDistrict,
          districtList: this.props.districtList
        },
        () => {
          this.props.fetchTehsils(
            this.state.selectedWCEdition,
            this.state.selectedDistrict
          );
        }
      );
    }

    return districtList;
  }

  getTehsilList() {
    let tehsilList = [];
    // districtList = this.props.districtList;

    if (
      // this.state.tehsilList.length === 0 &&
      this.props.tehsilList.length > 0
    ) {
      const selectedTehsil = this.props.tehsilList[0].value;
      // this.setState({ selectedDistrict });
      this.setState(
        {
          selectedTehsil: selectedTehsil,
          tehsilList: this.props.tehsilList
        },
        () => {
          this.props.fetchVillages(
            this.state.selectedWCEdition,
            this.state.selectedDistrict,
            this.state.selectedTehsil
          );
        }
      );
    }
  }

  displayCapitalize(str) {
    return str.toLowerCase();
  }

  handleChange(event, value) {
    this.setState({ opacity: value });
    this.props.updateOpacity(value);
  }

  render() {
    const { selectedWCEdition } = this.state;
    const { selectedDistrict } = this.state;
    const { selectedTehsil } = this.state;
    const { selectedVillage } = this.state;
    const { selectedMapType } = this.state;
    const wcEditionVal = selectedWCEdition && selectedWCEdition.value;
    const districtVal = selectedDistrict && selectedDistrict.value;
    const tehsilVal = selectedTehsil && selectedTehsil.value;
    const villageVal = selectedVillage && selectedVillage.value;
    const mapTypeVal = selectedMapType && selectedMapType.value;

    const { classes } = this.props;
    const { opacity } = this.state;
    return (
      <div id="slideout">
        <div className="filter">
          <img
            src="static/src/styles/images/filter.svg"
            className="toggle-arrow"
            alt="Feedback"
          />
          <span className="filter-title">Filter</span>
        </div>
        <div id="slideout_inner">
          <div
            id="module-legend"
            className="module scroll-thin-dark module-legend module-toggle"
          >
            <div className="toggle-icons-wrapper">
              <div id="filter-close" href="#" className=" text-right">
                <img
                  src="static/src/styles/images/baseline_arrow_left_black_24dp.png"
                  className="arrow "
                  alt="Feedback"
                />
              </div>

              <div id="hamburger" href="#" className="filter-hide text-right">
                <img
                  src="static/src/styles/images/baseline_arrow_right_black_24dp.png"
                  className="arrow "
                  alt="Feedback"
                />
              </div>
            </div>

            <div className="filter-content">
              <h6 className="section-heading">Water Cup Edition</h6>

              <Select
                name="form-field-name"
                clearable={false}
                value={this.state.selectedWCEdition}
                onChange={this.onWCEditionChange}
                placeholder="Select Water Cup Edition"
                options={this.state.wcEditionList}
                // options={[
                //   { value: 'district1', label: 'district1' },
                //   { value: 'district2', label: 'district2' }
                // ]}
              />

              <h6 className="section-heading">District</h6>

              <Select
                name="form-field-name"
                clearable={false}
                value={this.state.selectedDistrict}
                onChange={this.onDistrictChange}
                placeholder="Select District"
                options={this.state.districtList}
                // options={[
                //   { value: 'district1', label: 'district1' },
                //   { value: 'district2', label: 'district2' }
                // ]}
              />

              <h6 className="section-heading">Tehsil</h6>
              <Select
                clearable={false}
                name="form-field-name"
                value={this.state.selectedTehsil}
                onChange={this.onTehsilChange}
                placeholder="Select Tehsil"
                options={this.state.tehsilList}
              />

              <h6 className="section-heading">Village</h6>
              <Select
                name="form-field-name"
                clearable={false}
                value={this.state.selectedVillage}
                onChange={this.onVillageChange}
                placeholder="Select Village"
                // valueKey="vlgcd2011"
                // labelKey="villname"
                options={this.state.villageList}
                disabled={this.state.villageList.length <= 0 ? true : false}
              />

              <h6 className="section-heading">Map Type</h6>
              <Select
                name="form-field-name"
                clearable={false}
                value={mapTypeVal}
                onChange={this.onMapTypeChange}
                placeholder="Select Map Type"
                options={[
                  {
                    value: 'LandUse',
                    season: '',
                    type: 'LandUse',
                    label: 'Land Use'
                  },
                  {
                    value: 'SownAreaKharif',
                    type: 'SownArea',
                    season: 'kharif',
                    label: 'Sown Area - Kharif'
                  },
                  {
                    value: 'SownAreaRabi',
                    type: 'SownArea',
                    season: 'rabi',
                    label: 'Sown Area - Rabi'
                  },

                  {
                    value: 'IrrigatedAreaKharif',
                    type: 'IrrigatedArea',
                    season: 'kharif',
                    label: 'Irrigated Area - Kharif'
                  },
                  {
                    value: 'IrrigatedAreaRabi',
                    type: 'IrrigatedArea',
                    season: 'rabi',
                    label: 'Irrigated Area - Rabi'
                  },
                  {
                    value: 'SoilMoistureIndexJune',
                    type: 'SoilMoistureIndex',
                    season: 'june',
                    label: 'Soil Moisture - June'
                  },
                  {
                    value: 'SoilMoistureIndexJan',
                    type: 'SoilMoistureIndex',
                    season: 'jan',
                    label: 'Soil Moisture - Jan'
                  }
                ]}
              />

              <h6 className="section-heading">Map opacity</h6>
              <div className="opacity_div">
                <div className={classes.root} style={{ float: 'left' }}>
                  <Slider
                    value={opacity}
                    min={0}
                    max={1}
                    step={0.1}
                    aria-labelledby="label"
                    onChange={this.handleChange}
                  />
                </div>
                <div style={{ float: 'right', fontSize: '14px' }}>
                  {opacity.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateWCEdition,
      updateDistrict,
      updateTehsil,
      updateVillage,
      updateMapType,
      updatePeriod,
      fetchDistricts,
      fetchTehsils,
      fetchVillages,
      updateOpacity
    },
    dispatch
  );
}
function mapStateToProps({
  wcEditionList,
  districtList,
  tehsilList,
  villageList
}) {
  return { wcEditionList, districtList, tehsilList, villageList };
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Filter)
);

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
