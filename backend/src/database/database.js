const {Sequelize} = require('sequelize');
require("dotenv").config({path:"./.env"});

const database = process.env.DATABASE;
const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;

const requelize = new Sequelize(database,user,password,
    {
        host:process.env.HOST_DATABASE, dialect:'postgres', ssl:true, 
        dialectOptions:{
            ssl:{
                rejectUnauthorized: false
            }
        },
        // logging:true
    });

module.exports = requelize;