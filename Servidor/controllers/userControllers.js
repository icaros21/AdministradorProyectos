const Usuario = require('../models/Usuarios')

exports.crearUsuario = async (req, res) =>{
    const {email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email});

        if(usuario)
            res.status(400).json({msg: 'el usuario ya existe'});

        usuario = new  Usuario(req.body);

        await usuario.save();

        res.send('usuario creado');
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error')
    }
} 