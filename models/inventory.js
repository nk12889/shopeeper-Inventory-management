const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const Items = sequelize.define('item',{
id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
},

item_name : Sequelize.STRING,

description :{
    type : Sequelize.STRING,
    allowNull: false,
},

price : {
    type : Sequelize.INTEGER,
    allowNull : false,
},

quantity : {
    type : Sequelize.INTEGER,
    allowNull : false,
}



});


