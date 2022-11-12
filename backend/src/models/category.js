const {DataTypes,Model} = require("sequelize");
const sequelize = require("../database/database.js"); 

class category extends Model{}
category.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    description:{
        type:DataTypes.TEXT,
        validate:{
            //El orden de las validaciones importa
            notEmpty:{
                args:true,
                msg:"No puede estar vacío"
            },
            isAlphanumeric:{
                args:true,
                msg:"Solo se permite texto no números."
            },
           
        }
        
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
    
},{
    sequelize,
    modelName:"category",
    freezeTableName: true
});
module.exports = category;