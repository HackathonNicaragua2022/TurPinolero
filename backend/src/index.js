
require("dotenv").config({path:"./.env"});
const app = require('./app.js');
const sequelize = require("./database/database");

//starting the server 

const port = process.env.PORT || 3000;
async function main(){
     try{
        await sequelize.sync({force:false});
        app.listen(port, ()=>{
            console.log("starting server " + port);
        });
    }
    catch(error){
        console.error("No se pudo establecer conexion a la base de datos");
    }
}

main();