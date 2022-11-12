require("dotenv").config({path:"./.env"});

const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const FONTEND = process.env.FONTEND;
const TEST = process.env.TEST;

//settings 
app.set("port",process.env.PORT || 3005);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//app.use(cors());

app.use(cors({ origin: [FONTEND,TEST], optionsSuccessStatus: 200 }));

app.get("/",(req,res) =>{
    res.json({"NicaWiki":"Bienvenido a la api"});
});

app.use("/api",require("./routes/index"));

module.exports = app;