const express = require('express');
const roadController = require('../controller/roadController');

const router = express.Router();

router.post('/getSafestRoute', roadController.getSafestRoutes);

module.exports = router;
