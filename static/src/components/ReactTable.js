import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReactTable from 'react-table';
import { ReactTableDefaults } from 'react-table';

import { fetchMapTypeData } from '../actions/index';
import 'react-table/react-table.css';

import Tooltip from '@material-ui/core/Tooltip';

// import ReactTable from 'react-table';
Object.assign(ReactTableDefaults, {
  defaultPageSize: 1,
  minRows: 1,
  // maxRows: 4,
  showPagination: false
});

function titleCase(str) {
  // return _.upperFirst(_.toLower(str));
  return _.startCase(_.toLower(str));
}

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      tableTitle: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !prevProps.village ||
      !prevProps.mapType ||
      (prevProps.village &&
        this.props.village &&
        prevProps.village.villageCode !== this.props.village.villageCode) ||
      (prevProps.mapType &&
        this.props.mapType &&
        prevProps.mapType.mapType !== this.props.mapType.mapType)
    ) {
      this.getData();
    }
  }
  getData() {
    const tableTitle = {
      LandUse: 'Land Use (Ha)',
      SownArea: 'Sown Area (Ha)',
      IrrigatedArea: 'Irrigated Area (Ha)',
      SoilMoistureIndex: 'Soil Moisture Index'
    };
    if (this.props.village) {
      this.props
        .fetchMapTypeData(
          this.props.village.villageCode,
          this.props.mapType.mapType,
          this.props.timePeriod
        )
        .then(
          (a, b) => {
            this.setState({
              data: this.props.mapTypeData,
              tableTitle: tableTitle[this.props.mapType.mapType]
            });
          },
          () => {}
        );
    }
  }

  getColumns() {
    const beforeYear =
      this.props.timePeriod.startYear +
      '-' +
      (this.props.timePeriod.startYear + 1);
    const afterYear =
      this.props.timePeriod.endYear + '-' + (this.props.timePeriod.endYear + 1);

    const columnConfig = {
      LandUse: {
        type: {
          name: 'Land Use Class',
          accessor: 'type'
        },
        columns: [
          {
            name: this.props.timePeriod.startYear - 10,
            accessor: 'before.hectares',
            title: 'before.percentage'
          },
          {
            name: this.props.timePeriod.startYear,
            accessor: 'after.hectares',
            title: 'after.percentage'
          }
        ]
      },
      SownArea: {
        type: {
          name: 'Agricultural Land Use Class',
          accessor: 'type'
        },
        headerKharif: {
          name: 'Kharif',
          columns: [
            {
              name: beforeYear,
              accessor: 'kharif.before.hectares',
              title: 'row.original.kharif.before.percentage'
            },
            {
              name: afterYear,
              accessor: 'kharif.after.hectares',
              title: 'row.original.kharif.after.percentage'
            }
          ]
        },
        headerRabi: {
          name: 'Rabi',
          columns: [
            {
              name: beforeYear,
              accessor: 'rabi.before.hectares',
              title: 'row.original.rabi.before.percentage'
            },
            {
              name: afterYear,
              accessor: 'rabi.after.hectares',
              title: 'row.original.rabi.after.percentage'
            }
          ]
        }
      },
      IrrigatedArea: {
        type: {
          name: 'Irrigation Status',
          accessor: 'type'
        },
        headerKharif: {
          name: 'Kharif',
          columns: [
            {
              name: beforeYear,
              accessor: 'kharif.before.hectares',
              title: 'row.original.kharif.before.percentage'
            },
            {
              name: afterYear,
              accessor: 'kharif.after.hectares',
              title: 'row.original.kharif.after.percentage'
            }
          ]
        },
        headerRabi: {
          name: 'Rabi',
          columns: [
            {
              name: beforeYear,
              accessor: 'rabi.before.hectares',
              title: 'row.original.rabi.before.percentage'
            },
            {
              name: afterYear,
              accessor: 'rabi.after.hectares',
              title: 'row.original.rabi.after.percentage'
            }
          ]
        }
      },
      SoilMoistureIndex: {
        type: {
          name: 'Soil Moisture',
          accessor: 'type'
        },
        headerKharif: {
          name: 'Kharif',
          columns: [
            {
              name: beforeYear,
              accessor: 'kharif.before.soil_moisture_index',
              title: 'row.original.kharif.before.soil_moisture_index'
            },
            {
              name: afterYear,
              accessor: 'kharif.after.soil_moisture_index',
              title: 'row.original.kharif.after.soil_moisture_index'
            }
          ]
        },
        headerRabi: {
          name: 'Rabi',
          columns: [
            {
              name: beforeYear,
              accessor: 'rabi.before.soil_moisture_index',
              title: 'row.original.rabi.before.soil_moisture_index'
            },
            {
              name: afterYear,
              accessor: 'rabi.after.soil_moisture_index',
              title: 'row.original.rabi.after.soil_moisture_index'
            }
          ]
        }
      }
    };
    const dataColumnWidth = 140;
    const categoryColWidth = 240;
    const columnConfigForMapType = columnConfig[this.props.mapType.mapType];
    let columns = [];
    switch (this.props.mapType.mapType) {
      case 'LandUse':
        columns = [
          {
            Header: columnConfigForMapType.type.name,
            accessor: columnConfigForMapType.type.accessor,
            maxWidth: categoryColWidth,
            Cell: row => <div>{titleCase(row.value)}</div>
          },

          {
            Header: columnConfigForMapType.columns[0].name,
            accessor: columnConfigForMapType.columns[0].accessor,
            maxWidth: dataColumnWidth,
            Cell: row => (
              <Tooltip
                title={
                  row.original.before
                    ? row.original.before.percentage + '%'
                    : ''
                }
              >
                <div>{row.value}</div>
              </Tooltip>
            )
          },
          {
            Header: columnConfigForMapType.columns[1].name,
            accessor: columnConfigForMapType.columns[1].accessor,
            maxWidth: dataColumnWidth,
            Cell: row => (
              <Tooltip
                title={
                  row.original.before
                    ? row.original.before.percentage + '%'
                    : ''
                }
              >
                <div>{row.value}</div>
              </Tooltip>
            )
          }
        ];
        break;
      case 'SoilMoistureIndexJan':
      case 'SoilMoistureIndexJune':
        columns = [
          {
            Header: columnConfigForMapType.type.name,
            accessor: columnConfigForMapType.type.accessor,
            maxWidth: categoryColWidth
          },
          {
            Header: columnConfigForMapType.headerKharif.name,
            columns: [
              {
                Header: columnConfigForMapType.headerKharif.columns[0].name,
                accessor:
                  columnConfigForMapType.headerKharif.columns[0].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => <div>{row.value}</div>
              },
              {
                Header: columnConfigForMapType.headerKharif.columns[1].name,
                accessor:
                  columnConfigForMapType.headerKharif.columns[1].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => <div>{row.value}</div>
              }
            ]
            // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
          },
          {
            Header: columnConfigForMapType.headerRabi.name,
            columns: [
              {
                Header: columnConfigForMapType.headerRabi.columns[0].name,
                accessor: columnConfigForMapType.headerRabi.columns[0].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => <div>{row.value}</div>
              },
              {
                Header: columnConfigForMapType.headerRabi.columns[1].name,
                accessor: columnConfigForMapType.headerRabi.columns[1].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => <div>{row.value}</div>
              }
            ]
            // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
          }
        ];
        break;
      default:
        columns = [
          {
            Header: columnConfigForMapType.type.name,
            accessor: columnConfigForMapType.type.accessor,
            maxWidth: categoryColWidth
          },
          {
            Header: columnConfigForMapType.headerKharif.name,
            columns: [
              {
                Header: columnConfigForMapType.headerKharif.columns[0].name,
                accessor:
                  columnConfigForMapType.headerKharif.columns[0].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => (
                  <Tooltip
                    title={
                      row.original.kharif
                        ? row.original.kharif.before.percentage + '%'
                        : ''
                    }
                  >
                    <div>{row.value}</div>
                  </Tooltip>
                )
              },
              {
                Header: columnConfigForMapType.headerKharif.columns[1].name,
                accessor:
                  columnConfigForMapType.headerKharif.columns[1].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => (
                  <Tooltip
                    title={
                      row.original.kharif
                        ? row.original.kharif.after.percentage + '%'
                        : ''
                    }
                  >
                    <div>{row.value}</div>
                  </Tooltip>
                )
              }
            ]
            // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
          },
          {
            Header: columnConfigForMapType.headerRabi.name,
            columns: [
              {
                Header: columnConfigForMapType.headerRabi.columns[0].name,
                accessor: columnConfigForMapType.headerRabi.columns[0].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => (
                  <Tooltip
                    title={
                      row.original.kharif
                        ? row.original.rabi.before.percentage + '%'
                        : ''
                    }
                  >
                    <div>{row.value}</div>
                  </Tooltip>
                )
              },
              {
                Header: columnConfigForMapType.headerRabi.columns[1].name,
                accessor: columnConfigForMapType.headerRabi.columns[1].accessor,
                maxWidth: dataColumnWidth,
                Cell: row => (
                  <Tooltip
                    title={
                      row.original.kharif
                        ? row.original.rabi.after.percentage + '%'
                        : ''
                    }
                  >
                    <div>{row.value}</div>
                  </Tooltip>
                )
              }
            ]
            // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
          }
        ];
    }

    return columns;
  }

  render() {
    Object.assign(ReactTableDefaults, {
      defaultPageSize: 10,
      minRows: 1
      // etc...
    });

    // const data = this.getData();
    const columns = this.getColumns();

    return (
      <div className="row">
        <div className="table-header col-sm-12">
          <div className="table-title">
            {this.props.village
              ? 'Village ' +
                this.props.village.villageName +
                ' (' +
                this.props.village.villageCode +
                ') - ' +
                this.state.tableTitle
              : 'Maharashtra - ' + this.props.mapType.mapTypeLabel + ' Data'}
          </div>
        </div>
        <div className=" offset-lg-2 col-lg-8 col-md-10 offset-md-1">
          <ReactTable
            className="-striped"
            data={this.state.data}
            columns={columns}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ mapType, village, mapTypeData, timePeriod }) {
  return { mapType, village, mapTypeData, timePeriod };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchMapTypeData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
