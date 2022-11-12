const jwt = require("jsonwebtoken");

const authentication = (req, res,next) => {

    const header = req.headers["authorization"];
    if(typeof header == "undefined"){
        res.sendStatus(403);
        return 
    }
   
    const token = header.split(" ")[1];

    jwt.verify(token,"sercretKey",(error,auth)=>{
        
        if(error){
            res.sendStatus(403);
            return 
        }
        next();
    });
}

module.exports = { authentication };