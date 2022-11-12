const {DataTypes,Model} = require("sequelize");
const sequelize = require("../database/database.js"); 
const Review = require("./review.js");
const Gallery = require("./gallery.js");

class local extends Model{}
local.init({
    LocalId:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true,},
    NombreLocal:{
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
    Telefono:{ type:DataTypes.STRING(512), },
    DepartamentoId:{ type:DataTypes.STRING(4),},
    MunicipioId:{ type:DataTypes.TEXT,},
    Direccion:{ type:DataTypes.TEXT,},
    DescripcionHTML:{ type:DataTypes.TEXT,},
    DescripcionLugar:{ type:DataTypes.TEXT,},
    //CalificacionPromedio:{ type:DataTypes.INTEGER,},
    ImagenBaner:{ type:DataTypes.TEXT,},
    FechaRegistro:{ type:DataTypes.DATE, defaultValue: DataTypes.NOW },
    Activo:{ type:DataTypes.BOOLEAN, defaultValue:true},
    Longitud:{ type:DataTypes.DOUBLE, },
    Latitud:{ type:DataTypes.DOUBLE,},
    cantidadResenia: {
        type: DataTypes.VIRTUAL,
        get() {
          let count = 0;
          let reviews = this.getDataValue('Resenas');
          if(reviews !== undefined){
            reviews = reviews.filter(x => x.Activo == true);
            count = reviews.length;
          }
          return count;
        }
    },
    promedio: {
        type: DataTypes.VIRTUAL,
        get() {

            let total = 0;
            let count = 1;
            let reviews = this.getDataValue('Resenas');

            if(reviews !== undefined){

                reviews = reviews.filter(x => x.Activo == true);
                reviews.forEach(review => total += review.Calificacion);
                count = reviews.length;
            }
          
          return Math.floor((total/count));
        }
      }

    
},{
    sequelize,
    schema: 'nica',
    modelName:"Local",
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
});

local.hasMany(Review,{foreignKey:"LocalId"});
local.hasMany(Gallery,{foreignKey:"LocalId"});

module.exports = local;