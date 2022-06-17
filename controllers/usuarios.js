const { response,request } = require('express');

const usuariosGet = (req=request, res=response) =>{
    // res.status(200).json({

    const {nombre,apikey} = req.query;

    res.json({
        msg: 'Get mundo - controllerr',
        nombre,
        apikey
    });
};

const usuariosPut = (req, res=response) => {
    const {id} = req.params;

    res.json({
        msg: 'Put mundo - controller',
        id
    });
};

const usuariosPost = (req, res=response) =>{
   // const body = req.body;
    const {nombre,edad} = req.body;
    res.json({
        msg: 'Post mundo - controller',
        //body
        nombre,
        edad
    });
};

const usuariosDelete = (req, res=response) =>{
    res.json({
        msg: 'Delete mundo - controller'
    });
};
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}