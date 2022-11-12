const {DataTypes,Model} = require("sequelize");
const sequelize = require("../database/database.js"); 

class review extends Model{}

review.init({
    ResenaId: { type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, },
    LocalId: { type:DataTypes.INTEGER, allowNull:false },
    Calificacion: { type:DataTypes.INTEGER, allowNull:false,
        validate:{
        //El orden de las validaciones importa
            notNull:{
                args:true,
                msg:"El campo Calificación no puede estar vacío"
            },
            isNumeric:{
                args:true,
                msg:"El campo Calificación solo se permite números."
            }
        } 
    },
    Resena: { type:DataTypes.TEXT, allowNull:false, 
        validate:{
            //El orden de las validaciones importa
                notNull:{
                    args:true,
                    msg:"El campo Reseña no puede estar vacío"
                },
                notEmpty:{
                    args:true,
                    msg:"El campo Reseña no puede estar vacío"
                }
            },
        },
    UsuarioNombre: { type:DataTypes.STRING, allowNull:false, 
        validate:{
            //El orden de las validaciones importa
                notNull:{
                    args:true,
                    msg:"El campo UsuarioNombre no puede estar vacío"
                },
                notEmpty:{
                    args:true,
                    msg:"El campo UsuarioNombre no puede estar vacío"
                }
            },
        },
    FechaRegistro: { type:DataTypes.DATE, allowNull:false,  defaultValue:DataTypes.NOW },
    UsuarioCorreo: { type:DataTypes.STRING, allowNull:false ,
        validate:{
            //El orden de las validaciones importa
                notNull:{
                    args:true,
                    msg:"El campo UsuarioCorreo no puede estar vacío"
                },
                notEmpty:{
                    args:true,
                    msg:"El campo UsuarioCorreo no puede estar vacío"
                }
            },},
    Activo: { type:DataTypes.BOOLEAN, allowNull:false, defaultValue:true } 
},
{
    sequelize, schema: 'nica', modelName:"Resena", freezeTableName: true, createdAt:false, updatedAt:false
});


module.exports = review;