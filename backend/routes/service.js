const router = require('express').Router();

const serviceController = require ("../controllers/ServicesController")

//Funções
router.route('/services').post(function (req, res) {
  serviceController.create(req, res);
});
router.route('/services').get(function (req, res) {
  serviceController.getAll(req, res);
});
router.route('/services/:id').get(function (req, res) {
  serviceController.get(req, res);
});
router.route('/services/:id').delete(function (req, res) {
  serviceController.delete(req, res);
});

router.route('/services/:id').put(function (req, res) {
  serviceController.update(req, res);
});
module.exports = router