const express = require('express');
const router = express.Router();
router.use('/people', require('./people'));
router.use('/houses',require('./houses'));

module.exports = router;
