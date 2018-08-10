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
module.exports = {
  getWCEditions: function(req, res) {
    const wcEditionList = [];
    const query = datastore
      .createQuery('village')
      .select('wc_edition')
      .groupBy('wc_edition')
      .order('wc_edition');
    datastore.runQuery(query).then(results => {
      // Task entities found.
      const wc_editions = results[0];

      wc_editions.forEach(wc_edition =>
        wcEditionList.push({
          value: wc_edition['wc_edition'],
          label: wc_edition['wc_edition'].toString()
        })
      );
      res.json({ wceditions: wcEditionList });
    });
  },
  getDistricts: function(req, res) {
    const districtList = [];
    const query = datastore
      .createQuery('village')
      .select('dtname')
      .filter('wc_edition', '=', Number(req.query.wcEdition))
      .groupBy('dtname')
      .order('dtname');
    datastore.runQuery(query).then(results => {
      // Task entities found.
      const districts = results[0];

      districts.forEach(district =>
        districtList.push({
          value: district['dtname'],
          label: titleCase(district['dtname'])
        })
      );
      res.json({ districts: districtList });
    });
  },
  getTehsils: function(req, res) {
    // const query = datastore.createQuery('village').order('dtname', {
    //   descending: true
    // });

    // const query = 'SELECT DISTINCT dtname FROM village';
    const tehsilList = [];
    const query = datastore
      .createQuery('village')
      .select('ipname')
      .filter('wc_edition', '=', Number(req.query.wcEdition))
      .filter('dtname', '=', req.query.district.toUpperCase())
      .groupBy('ipname')
      .order('ipname');
    datastore.runQuery(query).then(results => {
      // Task entities found.
      const tehsils = results[0];

      tehsils.forEach(tehsil =>
        tehsilList.push({
          value: tehsil['ipname'],
          label: titleCase(tehsil['ipname'])
        })
      );
      res.json({ tehsils: tehsilList });
    });
  },
  getVillages: function(req, res) {
    // const query = datastore.createQuery('village').order('dtname', {
    //   descending: true
    // });

    // const query = 'SELECT DISTINCT dtname FROM village';
    const villageList = [];
    const query = datastore
      .createQuery('village')
      .select(['villname', 'vlgcd2011'])
      .filter('wc_edition', '=', Number(req.query.wcEdition))
      .filter('dtname', '=', req.query.district.toUpperCase())
      .filter('ipname', '=', req.query.tehsil.toUpperCase())
      .order('villname');
    datastore.runQuery(query).then(results => {
      // Task entities found.
      const villages = results[0];

      villages.forEach(village =>
        villageList.push({
          value: village['vlgcd2011'],
          label: titleCase(village['villname'])
        })
      );
      res.json({ villages: villageList });
    });
  }
};
