const { Op } = require("sequelize");
const Package = require("../models/package.js");
const sequelize = require("../database/database.js");

const Package2 = async(req,res) =>{
    try{
        res.json({"hola":"mundo"});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
    
}

const getPackage = async(req,res) =>{ 
    const { id } = req.params;
    const Package = await Package.findByPk(id);
}


const createPackage = async(req,res) =>{

    const dataPackage = req.body;
    await Package.create(dataPackage)
    .then(newPackage =>{
        res.json(newPackage);
    })
    .catch(err =>{
        res.json(err);
    });
}

const updatePackage = async(req,res) =>{
    
    const { id } = req.params;
    const { description,active } = req.body;
    res.status(200).json({message:"update successfull"});
}

const deletePackage = async(req,res) =>{
    
    const { id } = req.params;
  
    const Package = await Package.findByPk(id);    
    res.sendStatus(204);
}

const insertWithSp = async(req,res) =>{

    const { description } = req.body;
    console.log(description);
    const [results, metadata] = await sequelize.query("call spInsertPackage('" + description + "');");
    
    res,res.status(200).json(results);
}


module.exports = { Package,getPackage,createPackage, updatePackage,deletePackage,insertWithSp};