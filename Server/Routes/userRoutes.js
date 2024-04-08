const { User } = require('../Controllers/User');
const express = require('express');
const router = express.Router();

router.post('/contact',User);

module.exports = router;