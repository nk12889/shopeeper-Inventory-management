const express = require('express');
const sequelize = require('./util/database');
const bodyParser = require('body-parser')
const path = require('path');

// const sequelize = require('./util/database');
const adminRoutes = require('./routes/admin')

const app = express();


app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public','js')));

app.use(adminRoutes);








sequelize.sync({force:false})
.then(()=>{
    console.log('Data Synced')
})
.catch((error)=>{console.log(error);})



app.listen(4000,()=>{
    console.log(`Server is running on port ${4000}`)
})