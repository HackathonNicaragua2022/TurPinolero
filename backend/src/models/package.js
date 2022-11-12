const sequelize = require("../database/database.js"); 

class package extends Model{}

package.init({
    PaqueteId: { type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, },
    LocalId: { type:DataTypes.INTEGER, allowNull:false },
    Nombre: { type:DataTypes.TEXT, allowNull:false },
    Adultos: { type:DataTypes.INTEGER, allowNull:false },
    Ninios: { type:DataTypes.INTEGER, allowNull:false },
    Descripcion: { type:DataTypes.TEXT, allowNull:false,  defaultValue:DataTypes.NOW },
    Incluye: { type:DataTypes.TEXT, allowNull:false },
    Precio: { type:DataTypes.DECIMAL, allowNull:false },
    Completo: { type:DataTypes.BOOLEAN, allowNull:false },
    Activo: { type:DataTypes.BOOLEAN, allowNull:false, defaultValue:true } 
},
{
    sequelize, schema: 'nica', modelName:"Paquete", freezeTableName: true, createdAt:false, updatedAt:false
});


module.exports = package;