var express = require('express');
var listService = require('../services/listService');
var csvUploaderService = require('../services/csvUploaderService');
var geojsonService = require('../services/geojsonService');
var authService = require('../services/authService');
var testService = require('../services/testService');
var tableService = require('../services/tableService');

var router = express.Router();

router.route('/wceditions').get(listService.getWCEditions);

router.route('/districts').get(listService.getDistricts);
router.route('/tehsils').get(listService.getTehsils);
router.route('/villages').get(listService.getVillages);
router.route('/uploadVillageCSV').get(csvUploaderService.uploadVillageCSV);
router.route('/uploadLandUseCSV').get(csvUploaderService.uploadLandUseCSV);

router.route('/uploadSownAreaCSV').get(csvUploaderService.uploadSownAreaCSV);
router
  .route('/uploadIrrigatedAreaCSV')
  .get(csvUploaderService.uploadIrrigatedAreaCSV);

router
  .route('/uploadSoilMoistureIndexCSV')
  .get(csvUploaderService.uploadSoilMoistureIndexCSV);
router.route('/geojson').get(geojsonService.getGeojson);
router.route('/auth').post(authService.authenticate);
router.route('/testbucket').get(testService.testbucket);
router.route('/mapTypeData').get(tableService.getMapTypeData);

module.exports = router;
