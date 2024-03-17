const Items = require('../models/inventory');
const path = require('path');
const express = require('express');
const { JSON } = require('sequelize');



exports.AddItems = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','public', 'views','Items.html'));
     
}

exports.postAddItems = (req,res,next) => {
    res.send('Items Added Sucessfully');
     
}