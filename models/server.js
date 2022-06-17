const express = require('express');
const cors = require('cors')
require('dotenv').config();

class Server{
    constructor(){
            this.app = express();
            this.port = process.env.PORT;
            this.usuariosRoutePath = '/api/usuarios'
            //middlewares
            this.middelwares();

            this.routes();
    }

    middelwares(){
         //COORS
         this.app.use(cors());        
        //Body Parser
        this.app.use(express.json());                 
         //directorio publico
         this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosRoutePath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;