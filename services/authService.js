var main_config = require('../main_config');

const sjcl = require('sjcl');
var config = {
  projectId: main_config.projectID,
  keyFilename: main_config.keyFilename
};
const datastore = require('@google-cloud/datastore')(config);

module.exports = {
  authenticate: function(req, res) {
    const authStr = sjcl.decrypt(main_config.passKey, req.body.pass);

    const query = datastore
      .createQuery('auth')
      .select('pass')
      .filter('user', '=', req.body.user);

    datastore.runQuery(query).then(results => {
      if (results[0].length > 0) {
        const pass = results[0][0].pass;

        if (authStr === pass) {
          res.json({
            auth: true
          });
        } else {
          res.json({
            auth: false,
            error: 'pass'
          });
        }
      } else {
        res.json({
          auth: false,
          error: 'user'
        });
      }
    });
  }
};
