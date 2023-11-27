const router = require('express').Router();

const servicesRouter = ('./services')

router.use('/', servicesRouter);

module.exports = router;