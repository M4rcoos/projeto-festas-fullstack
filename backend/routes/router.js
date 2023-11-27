const router = require('express').Router();

const servicesRouter = require('./service')

router.use('/', servicesRouter);

module.exports = router;