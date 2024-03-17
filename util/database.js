const path = require('path')
const Sequelize = require('sequelize');


const sequelize = new Sequelize('shop-data','root','705043',{
 dialect : 'mysql',
 host : 'localhost'

});


module.exports = sequelize;