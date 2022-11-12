const {DataTypes,Model} = require("sequelize");
const sequelize = require("../database/database.js"); 

class Gallery extends Model{}
Gallery.init({
    GaleriaId:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true,},
    LocalId: { type:DataTypes.INTEGER, allowNull:false }, 
    Nombre:{
        type:DataTypes.STRING(1024),
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
    Extension:{ type:DataTypes.TEXT,},
    Activo: { type:DataTypes.BOOLEAN, allowNull:false, defaultValue:true } 
    
},{
    sequelize,
    schema: 'nica',
    modelName:"Galeria",//nombre de la tabla 
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
});

module.exports = Gallery;