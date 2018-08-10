var main_config = require('../main_config');

var axios = require('axios');

module.exports = {
  getGeojson: function(req, res) {
    axios
      .get(
        'https://storage.googleapis.com/' +
          main_config.geojsonBucket +
          '/wc12_sample121_vlgcd2011__529705.json'
      )
      .then(response => {
        res.json({ response: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
