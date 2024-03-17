const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/items');


router.get('/',adminController.AddItems);

router.post('/items',adminController.postAddItems);






module.exports = router;