
const fetch = require('node-fetch');
const btoa = require('btoa');
require("dotenv").config({path:"./.env"});

const _hots =  process.env.HOST_ELASCTISEARCH;
const _user = process.env.USER_ELASCTISEARCH;
const _password = process.env.PASSWORD_ELASCTISEARCH;

const sendRequest = async(url,location) => await fetch(url,
    {
        method:"POST",
        body:JSON.stringify(location),
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Basic ${btoa(_user + ':' + _password)}`
        }
    });

const insert = async(location) => await sendRequest(_hots + "locations/_doc/" + location.localId,location);

const update = async(id,location) => await sendRequest(_hots + "locations/_update/" + id,{doc:location});

const search = async(departamento, municipio, keywords,tags) => {
    console.log(departamento,keywords);

    const response = await sendRequest(_hots + "locations/_search",{
        "query": {
            "bool":{
                "must":{
                    // "term":{ "departamento":{"value":departamento} }
                    "dis_max":{
                        "queries":[
                            // {
                            //     "multi_match": {
                            //         "query" : departamento, 
                            //         "fields": ["departamento"],
                            //         "type":       "cross_fields",
                            //         "analyzer":   "standard",
                            //         "operator": "and",
                                    
                            //     }
                            // },
                            {
                                "multi_match": {
                                    "query" : "parque", 
                                    "fields": ["nombre","descripcion"],
                                    "type":       "cross_fields",
                                    "analyzer":   "standard",
                                    "operator": "or",
                                    
                                }
                            }
                        ]
                    }
                },
                // "filter":[
                //     { "term":{ "departamento":{ "value":departamento} } }
                // ]
            }
        }
    });

   
    const res = response.json();
    return res;
}

module.exports = { insert,update,search }