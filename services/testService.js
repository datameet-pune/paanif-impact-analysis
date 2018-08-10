var main_config = require('../main_config');

var config = {
  projectId: main_config.projectID,
  keyFilename: main_config.keyFilename
};
const storage = require('@google-cloud/storage')(config);

module.exports = {
  testbucket: function(req, res) {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    const bucketName = 'paanif-test';
    const filename = './static/src/styles/images/filter.svg';
    const options = {
      destination: 'test-bucket/new-image1.svg'
    };
    // Uploads a local file to the bucket
    storage
      .bucket(bucketName)
      .upload(filename, options)
      .then(() => {
        console.log(`${filename} uploaded to ${bucketName}.`);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }
};
