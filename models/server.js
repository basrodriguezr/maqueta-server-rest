const express = require('express');
const cors = require('cors')
require('dotenv').config();

class Server{
    constructor(){
            this.app = express();
            this.port = process.env.PORT;

            //middlewares
            this.middelwares();

            this.routes();
    }

    middelwares(){
         //COORS
         this.app.use(cors());

         //directorio publico
         this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', function (req, res) {
            // res.status(200).json({
            res.json({
                msg: 'Get mundo'
            });
        });

        this.app.put('/api', function (req, res) {
            res.json({
                msg: 'Put mundo'
            });
        });

        this.app.post('/api', function (req, res) {
            res.json({
                msg: 'Post mundo'
            });
        });

        this.app.delete('/api', function (req, res) {
            res.json({
                msg: 'Delete mundo'
            });
        });
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;