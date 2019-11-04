var mongoose = require("mongoose");

let database = 'RegistroAPI';
let port = '27017';
let host = 'localhost';
let uri = `mongodb://${host}:${port}/${database}`;

connectDB = ()=>{

mongoose.Promise = global.Promise;

mongoose.connect(uri,{useNewUrlParser:true})
    .then(()=>{console.log("La conexion fue exitosa ");})
    .catch(()=>{console.log("Error a la hora de conectarse ");});
};

module.exports = {
    connectDB,
};

