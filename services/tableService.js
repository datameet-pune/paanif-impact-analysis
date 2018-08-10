var main_config = require('../main_config');

const _ = require('lodash');
var config = {
  projectId: main_config.projectID,
  keyFilename: main_config.keyFilename
};
const datastore = require('@google-cloud/datastore')(config);

function titleCase(str) {
  // return _.upperFirst(_.toLower(str));
  return _.startCase(_.toLower(str));
}

function getLandUseData(req, res) {
  // const query = datastore.createQuery('village').order('dtname', {
  //   descending: true
  // });

  // const query = 'SELECT DISTINCT dtname FROM village';

  const villageList = [];
  const beforeYear = req.query.beforeYear - 10;
  const afterYear = req.query.beforeYear;
  const query = datastore
    .createQuery('land_use')
    // .select(['villname', 'vlgcd2011'])
    .filter('vlgcd2011', '=', req.query.vlgcd2011);
  // .filter('mapType', '=', req.query.tehsil.toUpperCase())
  // .order('villname');
  datastore.runQuery(query).then(results => {
    // Task entities found.
    const villages = results[0];

    var rowData = [];

    data = _.chain(villages)
      .groupBy('land_use_class')
      .value();
    _.forEach(data, (type, key) => {
      const before = {
        percentage: null,
        hectares: null
      };

      const after = {
        percentage: null,
        hectares: null
      };

      const beforeData = _.filter(type, {
        year: beforeYear.toString()
      })[0];

      before.percentage = beforeData ? beforeData.percentage : 'NA';
      before.hectares = beforeData ? beforeData.hectares : 'NA';

      const afterData = _.filter(type, {
        year: afterYear
      })[0];
      after.percentage = afterData ? afterData.percentage : 'NA';
      after.hectares = afterData ? afterData.hectares : 'NA';
      rowData.push({
        type: key,
        before: before,
        after: after
      });
    });

    res.json(rowData);
  });
}

function getSownAreaData(req, res) {
  // const query = datastore.createQuery('village').order('dtname', {
  //   descending: true
  // });

  // const query = 'SELECT DISTINCT dtname FROM village';

  const villageList = [];
  const beforeYear = req.query.beforeYear;
  const afterYear = req.query.afterYear;
  const query = datastore
    .createQuery('sown_area')
    // .select(['villname', 'vlgcd2011'])
    .filter('vlgcd2011', '=', req.query.vlgcd2011);
  // .filter('mapType', '=', req.query.tehsil.toUpperCase())
  // .order('villname');
  datastore.runQuery(query).then(results => {
    // Task entities found.
    const villages = results[0];

    var rowData = [];

    data = _.chain(villages)
      .groupBy('agricultural_land_use_class')
      .value();
    _.forEach(data, (type, key) => {
      const kharif = {
        before: {
          percentage: null,
          hectares: null
        },
        after: {
          percentage: null,
          hectares: null
        }
      };

      const rabi = {
        before: {
          percentage: null,
          hectares: null
        },
        after: {
          percentage: null,
          hectares: null
        }
      };

      // kharif
      const kharifBefore = _.filter(type, {
        season: 'KHARIF',
        year: beforeYear
      })[0];

      kharif['before'].percentage = kharifBefore
        ? kharifBefore.percentage
        : 'NA';
      kharif['before'].hectares = kharifBefore ? kharifBefore.hectares : 'NA';

      const rabiBefore = _.filter(type, {
        season: 'RABI',
        year: beforeYear
      })[0];
      rabi['before'].percentage = rabiBefore ? rabiBefore.percentage : 'NA';
      rabi['before'].hectares = rabiBefore ? rabiBefore.hectares : 'NA';

      const kharifAfter = _.filter(type, {
        season: 'KHARIF',
        year: afterYear
      })[0];
      kharif['after'].percentage = kharifAfter ? kharifAfter.percentage : 'NA';
      kharif['after'].hectares = kharifAfter ? kharifAfter.hectares : 'NA';

      const rabiAfter = _.filter(type, { season: 'RABI', year: afterYear })[0];
      rabi['after'].percentage = rabiAfter ? rabiAfter.percentage : 'NA';
      rabi['after'].hectares = rabiAfter ? rabiAfter.hectares : 'NA';

      rowData.push({
        type: titleCase(key),
        kharif: kharif,
        rabi: rabi
      });
    });

    // return rowData;
    res.json(rowData);
  });
}

function getIrrigatedAreaData(req, res) {
  // const query = datastore.createQuery('village').order('dtname', {
  //   descending: true
  // });

  // const query = 'SELECT DISTINCT dtname FROM village';

  const villageList = [];
  const beforeYear = req.query.beforeYear;
  const afterYear = req.query.afterYear;
  const query = datastore
    .createQuery('irrigated_area')
    // .select(['villname', 'vlgcd2011'])
    .filter('vlgcd2011', '=', req.query.vlgcd2011);
  // .filter('mapType', '=', req.query.tehsil.toUpperCase())
  // .order('villname');
  datastore.runQuery(query).then(results => {
    // Task entities found.
    const villages = results[0];

    var rowData = [];

    data = _.chain(villages)
      .groupBy('irrigation_status')
      .value();

    _.forEach(data, (type, key) => {
      const kharif = {
        before: {
          percentage: null,
          hectares: null
        },
        after: {
          percentage: null,
          hectares: null
        }
      };

      const rabi = {
        before: {
          percentage: null,
          hectares: null
        },
        after: {
          percentage: null,
          hectares: null
        }
      };

      // kharif
      const kharifBefore = _.filter(type, {
        season: 'KHARIF',
        year: beforeYear
      })[0];

      kharif['before'].percentage = kharifBefore
        ? kharifBefore.percentage
        : 'NA';
      kharif['before'].hectares = kharifBefore ? kharifBefore.hectares : 'NA';

      const rabiBefore = _.filter(type, {
        season: 'RABI',
        year: beforeYear
      })[0];
      rabi['before'].percentage = rabiBefore ? rabiBefore.percentage : 'NA';
      rabi['before'].hectares = rabiBefore ? rabiBefore.hectares : 'NA';

      const kharifAfter = _.filter(type, {
        season: 'KHARIF',
        year: afterYear
      })[0];
      kharif['after'].percentage = kharifAfter ? kharifAfter.percentage : 'NA';
      kharif['after'].hectares = kharifAfter ? kharifAfter.hectares : 'NA';

      const rabiAfter = _.filter(type, { season: 'RABI', year: afterYear })[0];
      rabi['after'].percentage = rabiAfter ? rabiAfter.percentage : 'NA';
      rabi['after'].hectares = rabiAfter ? rabiAfter.hectares : 'NA';

      rowData.push({
        type: titleCase(key),
        kharif: kharif,
        rabi: rabi
      });
    });

    res.json(rowData);
  });
}

function getSoilMoistureIndexData(req, res) {
  const villageList = [];
  const beforeYear = req.query.beforeYear;
  const afterYear = req.query.afterYear;
  const query = datastore
    .createQuery('soil_moisture_index')
    .filter('vlgcd2011', '=', req.query.vlgcd2011);

  datastore.runQuery(query).then(results => {
    // Task entities found.
    const villages = results[0];

    var rowData = [];

    data = _.chain(villages)
      .groupBy('soil_moisture')
      .value();

    _.forEach(data, (type, key) => {
      const kharif = {
        before: {},
        after: {}
      };

      const rabi = {
        before: {},
        after: {}
      };

      // kharif
      const kharifBefore = _.filter(type, {
        season: 'KHARIF',
        year: beforeYear
      })[0];

      kharif['before'].soil_moisture_index = kharifBefore
        ? kharifBefore.soil_moisture_index
        : 'NA';

      const rabiBefore = _.filter(type, {
        season: 'RABI',
        year: beforeYear
      })[0];
      rabi['before'].soil_moisture_index = rabiBefore
        ? rabiBefore.soil_moisture_index
        : 'NA';

      const kharifAfter = _.filter(type, {
        season: 'KHARIF',
        year: afterYear
      })[0];
      kharif['after'].soil_moisture_index = kharifAfter
        ? kharifAfter.soil_moisture_index
        : 'NA';

      const rabiAfter = _.filter(type, { season: 'RABI', year: afterYear })[0];
      rabi['after'].soil_moisture_index = rabiAfter
        ? rabiAfter.soil_moisture_index
        : 'NA';

      rowData.push({
        type: titleCase(key),
        kharif: kharif,
        rabi: rabi
      });
    });

    res.json(rowData);
  });
}

module.exports = {
  getMapTypeData: function(req, res) {
    var result = [];
    switch (req.query.mapType) {
      case 'LandUse':
        getLandUseData(req, res);
        break;
      case 'SownArea':
        getSownAreaData(req, res);
        break;
      case 'IrrigatedArea':
        getIrrigatedAreaData(req, res);
        break;
      case 'SoilMoistureIndex':
        getSoilMoistureIndexData(req, res);
        break;
      default:
        res.json([]);
    }
  }
};
