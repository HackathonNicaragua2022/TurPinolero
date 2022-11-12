
const jwt = require("jsonwebtoken");
const { encrypt,compare} = require('../helpers/hanbleBcrypt.js');

const User = require("../models/user.js");

const SECRET_KEY = process.env.JWS_SECRET_KEY;

const signIn = async(req,res) =>{

    const {email, password} = req.body;
    
    const user = await User.findOne({where:{Correo:email}});

    if(user == null){
        return res.status(200).json({"status":"Ok","message":"Su correo electrónico no esta registrado."});
    }

    const password_confirm = await compare(password,user.Contrasenia);

    if(!password_confirm){
        res.status(200).json({"status":"Error","message":"La contraseña es incorrecta."}); return;
    }



    jwt.sign({
        user:{ email, password, fecha: Date.now() }},SECRET_KEY, (err,token) => {
            
            if(err){
                res.status(400).json({"message":"Ocurrio un error inesperado al realizar la autenticación."}); return;
            }

            res.json({token})
        }
    );
};

const signOut = async(req,res) =>{};

const resetPassword = async(req,res) =>{

    const { password, newPassword } = req.body;

    const password_confirm = await compare(password,user.Contrasenia);
    
    if(!password_confirm){
        res.status(200).json({"status":"Error","message":"La contraseña es incorrecta."}); return;
    }

    const password_hash = await encrypt(newPassword);

    


    res.json({"status":"Ok","message":"reset password"});

};

const create = async(req,res) =>{

    try{

        let data = req.body;
        
        if(data.Contrasenia != "" && data.Contrasenia != null){
            if(data.Contrasenia.trim()){
                data.Contrasenia = await encrypt(data.Contrasenia);
            }
        }
        
        await User.create(data);
        
        res.status(200).json({"status":"Ok","message":"La cuenta fue creada correctamente."});
    }
    catch(error){
        res.status(200).json({"status":"Error",mesage :error.message});
    }
};

module.exports = { signIn, signOut, resetPassword, create };