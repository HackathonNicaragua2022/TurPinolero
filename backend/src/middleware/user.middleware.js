const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWS_SECRET_KEY;

const authentication = (req, res,next) => {

    const header = req.headers["authorization"];
    if(typeof header == "undefined"){
        res.sendStatus(403);
        return 
    }
   
    const token = header.split(" ")[1];

    jwt.verify(token,SECRET_KEY,(error,auth)=>{
        
        if(error) res.sendStatus(403); return 
        
        next();
    });
}

const validateLogin = (req, res,next) =>{

    const {email, password} = req.body;
    
    if(email == "" || email == null){
        res.status(400).json({"message":"El campo correo electrónico no puede estar vació."});return; 
    }
    if(!email.trim()){
        res.status(400).json({"message":"El campo correo electrónico no puede estar vació."}); return;
    }

    if(password == "" || password == null){
        res.status(400).json({"message":"El campo Contraseña no puede estar vació."}); return;
    }
    if(!password.trim()){
        res.status(400).json({"message":"El campo Contraseña no puede estar vació."}); return;
    }

    next();
};

module.exports = { authentication,validateLogin };