var main_config = require('../main_config');
const csv = require('fast-csv');

var config = {
  projectId: main_config.projectID,
  keyFilename: main_config.keyFilename
};
const datastore = require('@google-cloud/datastore')(config);

module.exports = {
  uploadVillageCSV: function(req, res) {
    let i = 1;
    csv
      .fromPath('./data/wcedition_district_tehsil_village_list.csv')
      .on('data', function(data) {
        const kind = 'village';
        const taskKey = datastore.key(kind);

        // Prepares the new entity
        const village = {
          key: taskKey,
          data: {
            dtname: data[0].toUpperCase(),
            ipname: data[1].toUpperCase(),
            villname: data[2].toUpperCase(),
            vlgcd2011: data[3],
            wc_edition: Number(data[4])
          }
        };

        // Saves the entity
        datastore
          .insert(village)
          .then(() => {
            console.log(
              `${i++} Saved ${village.key.ID}: ${village.data.villname}`
            );
          })
          .catch(err => {
            console.error('ERROR:', err);
          });
      })
      .on('end', function() {
        res.json({ done: 'done' });
      });
  },
  uploadLandUseCSV: function(req, res) {
    let i = 1;
    csv
      .fromPath('./data/land_use.csv')
      .on('data', function(data) {
        const kind = 'land_use';
        const taskKey = datastore.key(kind);

        // Prepares the new entity
        const village = {
          key: taskKey,
          data: {
            vlgcd2011: data[0],
            villname: data[1].toUpperCase(),
            year: data[2],
            land_use_class: data[3].toUpperCase(),
            hectares: data[4],
            percentage: data[5]
          }
        };
        // Saves the entity
        datastore
          .insert(village)
          .then(() => {
            console.log(
              `${i++} Saved ${village.key.ID}: ${village.data.villname}`
            );
          })
          .catch(err => {
            console.error('ERROR:', err);
          });
      })
      .on('end', function() {
        res.json({ done: 'done' });
      });
  },
  uploadSownAreaCSV: function(req, res) {
    let i = 1;
    csv
      .fromPath('./data/sown_area.csv')
      .on('data', function(data) {
        const kind = 'sown_area';
        const taskKey = datastore.key(kind);

        // Prepares the new entity
        const village = {
          key: taskKey,
          data: {
            vlgcd2011: data[0],
            villname: data[1].toUpperCase(),
            year: data[2].toUpperCase(),
            season: data[3].toUpperCase(),
            agricultural_land_use_class: data[4].toUpperCase(),
            hectares: data[5],
            percentage: data[6]
          }
        };
        // Saves the entity
        datastore
          .insert(village)
          .then(() => {
            console.log(
              `${i++} Saved ${village.key.ID}: ${village.data.villname}`
            );
          })
          .catch(err => {
            console.error('ERROR:', err);
          });
      })
      .on('end', function() {
        res.json({ done: 'done' });
      });
  },
  uploadIrrigatedAreaCSV: function(req, res) {
    let i = 1;
    csv
      .fromPath('./data/irrigated_area.csv')
      .on('data', function(data) {
        const kind = 'irrigated_area';
        const taskKey = datastore.key(kind);

        // Prepares the new entity
        const village = {
          key: taskKey,
          data: {
            vlgcd2011: data[0],
            villname: data[1].toUpperCase(),
            year: data[2].toUpperCase(),
            season: data[3].toUpperCase(),
            irrigation_status: data[4].toUpperCase(),
            hectares: data[5],
            percentage: data[6]
          }
        };
        // Saves the entity
        datastore
          .insert(village)
          .then(() => {
            console.log(
              `${i++} Saved ${village.key.ID}: ${village.data.villname}`
            );
          })
          .catch(err => {
            console.error('ERROR:', err);
          });
      })
      .on('end', function() {
        res.json({ done: 'done' });
      });
  },
  uploadSoilMoistureIndexCSV: function(req, res) {
    let i = 1;
    csv
      .fromPath('./data/soil_moisture_index.csv')
      .on('data', function(data) {
        const kind = 'soil_moisture_index';
        const taskKey = datastore.key(kind);

        // Prepares the new entity
        const village = {
          key: taskKey,
          data: {
            vlgcd2011: data[0],
            villname: data[1].toUpperCase(),
            year: data[2].toUpperCase(),
            season: data[3].toUpperCase(),
            soil_moisture: 'SOIL MOISTURE INDEX',
            soil_moisture_index: data[4]
          }
        };
        // Saves the entity
        datastore
          .insert(village)
          .then(() => {
            console.log(
              `${i++} Saved ${village.key.ID}: ${village.data.villname}`
            );
          })
          .catch(err => {
            console.error('ERROR:', err);
          });
      })
      .on('end', function() {
        res.json({ done: 'done' });
      });
  }
};
