
const category = require("../models/category.js");
const sequelize = require("../database/database.js");

const categories = async(req,res) =>{
    try{
        // throw new Error("error");
        // const categories = await category.findAll({
        //     where: {
        //         active:true
        //     }
        //   });
        res.json({"hola":"mundo"});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
    
}

const getCategory = async(req,res) =>{ 
    const { id } = req.params;
    const category2 = await category.findByPk(id);

    if(!category2)
        return res.status(404).json({message:"category does not exists"});

    res.json(category2);
}


const createCategory = async(req,res) =>{

    const dataCategory = req.body;
    // const newCategory = await category.create(dataCategory);
    await category.create(dataCategory)
    .then(newCategory =>{
        res.json(newCategory);
    })
    .catch(err =>{
        res.json(err);
    });
}

const updateCategory = async(req,res) =>{
    
    const { id } = req.params;
    const { description,active } = req.body;
    const category2 = await category.findByPk(id);
    if(!category2)
        return res.status(404).json({message:"category does not exists"});

    await category2.update({description,active});
    
    res.status(200).json({message:"update successfull"});
}

const deleteCategory = async(req,res) =>{
    
    const { id } = req.params;
  
    const category2 = await category.findByPk(id);
    if(!category2)
        return res.status(404).json({message:"category does not exists"});

    await category2.update({active:false });
    
    res.sendStatus(204);
}

const insertWithSp = async(req,res) =>{

    const { description } = req.body;
    console.log(description);
    const [results, metadata] = await sequelize.query("call spInsertCategory('" + description + "');");
    
    res,res.status(200).json(results);
}


module.exports = { categories,getCategory,createCategory, updateCategory,deleteCategory,insertWithSp};