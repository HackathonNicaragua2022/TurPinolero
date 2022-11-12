const {DataTypes,Model} = require("sequelize");
const { encrypt,compare} = require('../helpers/hanbleBcrypt.js');

const sequelize = require("../database/database.js"); 

class User extends Model{}
User.init({
    UsuarioId:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    Correo: { type:DataTypes.STRING(1024), allowNull:false,unique: true,
        validate:{
            //El orden de las validaciones importa
            notNull:{
                args:true,
                msg:"El campo Correo no puede estar vacío."
            },
            notEmpty:{
                args:true,
                msg:"El campo Correo no puede estar vacío."
            },
            isEmail:{
                args:true,
                msg:"ingrese un correco electrónico valido."
            }
        }
    },
    Nombres:{ type:DataTypes.STRING(255),allowNull:false, 
        validate:{
            notNull:{ 
                args:true,
                msg:"El campo Nombres no puede estar vacío"
            },
            notEmpty:{
                args:true,
                msg:"El campo Nombres no puede estar vacío"
            },
            min:{ 
                args:3,
                msg:"Mínimo 3 caracteres"
            }
        }
    },
    Apellidos:{ type:DataTypes.STRING(255),allowNull:false, 
        validate:{
            notNull:{ 
                args:true,
                msg:"El campo Apellidos no puede estar vacío"
            },
            notEmpty:{
                args:true,
                msg:"El campo Apellidos no puede estar vacío"
            },
            min:{ 
                args:3,
                msg:"Mínimo 3 caracteres"
            }
        }
    },
    Contrasenia:{ 
        type:DataTypes.TEXT,
        allowNull:false,
        validate:{
            notNull:{ 
                args:true,
                msg:"El campo Contraseña no puede estar vacío"
            },
            notEmpty:{
                args:true,
                msg:"El campo Contraseña no puede estar vacío"
            }
        }
    },
    FechaCreacion:{ type:DataTypes.DATE,allowNull:false,defaultValue:DataTypes.NOW },
    Activo:{ type:DataTypes.STRING(255),allowNull:false,defaultValue:true },
},{
    sequelize,
    schema: 'nica',
    modelName:"Usuarios",//nombre de la tabla 
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
});

module.exports = User;