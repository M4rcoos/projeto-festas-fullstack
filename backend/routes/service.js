const router = require('express').Router();

const serviceController = require ("../controllers/ServicesController")

//Funções
router.route('/services').post(function (req, res) {
  serviceController.create(req, res);
});
router.route('/services').get(function (req, res) {
  serviceController.getAll(req, res);
});
router.route('/services/id').get(function (req, res) {
  serviceController.get(req, res);
});
module.exports = router