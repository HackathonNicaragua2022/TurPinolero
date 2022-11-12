
const sequelize = require("../database/database.js");

const Local = require("../models/local.js");
const Review = require("../models/review.js");
const Gallery = require("../models/gallery.js");

const elasticSearch = require("../elasticSearch.js");

const insertSpot = async(req,res) =>{

    const transaction = await sequelize.transaction();
    try{
        
        const local = req.body;
        const [results, metadata] = await sequelize.query("SELECT * FROM nica.\"fnLocalInsertar\"('" + JSON.stringify(local) + "');");
       
        let imagen = local.Imagenes.length > 0 ? local.Imagenes[0].Nombre : "";

        const electic_doc = { localId:results[0].fnLocalInsertar.LocalId,nombre: local.NombreLocal,
            descripcion: local.DescripcionLugar,promedio:"0",cantidadResenia:0,verificado:false,promocion:false,
            imagen: imagen,categoria:local.Categorias,departamento:"",municipio:""
        };

        const response = await elasticSearch.insert(electic_doc);
        
        if(!response.ok){
            return res.status(200).json({"status":"Error",message:err.message});
        }

        transaction.commit();
        res.json({"status":"Ok","message":"La creación del local fue exitosa."});
    }
    catch(err){
        transaction.rollback();
        return res.status(400).json({"status":"Error",message:err.message});
    }
    
}

const getListLocations = async(req,res) =>{
   
    const { departamento, municipio, keywords,tags } = req.body;
    try{
        const elastic = await elasticSearch.search(departamento, municipio, keywords,tags);
        res.json(elastic.hits);
    }
    catch(err){
        res.status(200).json({"status":"Error","message":"Ocurrio un error inesperado."});
    }
}

const getLocalById = async(req,res) =>{

    const { id } = req.params;
    const local = await Local.findByPk(id,{include: [Review,Gallery]});
    
    res.json(local);
}

const insertReview = async(req,res) =>{

    const { id } = req.params;
    let data = req.body;
    data["LocalId"] = id;
    data["FechaRegistro"] = new Date(Date.now()).toISOString();
   
    const transaction = await sequelize.transaction();
    try{

        const newReview = await Review.create(data);
        const local = await Local.findByPk(id,{include: [Review]});
        const response = await elasticSearch.update(id,{promedio: local.promedio,cantidadResenia : local.cantidadResenia});

        if(!response.ok) res.status(200).json({"status":"Error","mesage" :"Ocurrio un error inesperado."});
       
        await transaction.commit();
        res.json(newReview);
    }
    catch(error){
        await transaction.rollback();
        res.status(500).json({"status":"Error","mesage" :"Ocurrio un error inesperado."});
    }

   
}

module.exports = { insertSpot, getListLocations ,getLocalById,insertReview};