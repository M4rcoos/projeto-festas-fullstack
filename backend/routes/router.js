const router = require('express').Router();

//services router
const servicesRouter = require('./service')
router.use('/', servicesRouter);

//party routes 
const partyRouter = require("./parties")
router.use('/', partyRouter);

module.exports = router;