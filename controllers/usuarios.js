const { response } = require('express');

const usuariosGet = (req, res=response) =>{
    // res.status(200).json({
    res.json({
        msg: 'Get mundo - controller'
    });
};

const usuariosPut = (req, res=response) =>{
    res.json({
        msg: 'Put mundo - controller'
    });
};

const usuariosPost = (req, res=response) =>{
    res.json({
        msg: 'Post mundo - controller'
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