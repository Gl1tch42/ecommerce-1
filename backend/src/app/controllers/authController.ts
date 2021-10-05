import express, { Router } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto = require('crypto')

const authConfig = require('../../config/auth.json')

const User = require('../models/user')

const router = express.Router();

function generateToken(params = {}) {
    jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

router.get('/users', async (req, res) => {
    const usersList = await User.find()
    return res.json(usersList);
})

router.post('/register', async (req, res) => {
    const { email } = req.body
    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'O usuário já existe. ' })
        const user = await User.create(req.body);

        if (user.email != user.confirmEmail) {
            return res.status(400).send({ error: "A confirmação do e-mail deve ser igual." })
        }

        user.senha = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id })
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro. ' })
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, senha } = req.body;

    const user = await User.findOne({ email }).select('+senha');

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado!' })

    if (!await bcrypt.compare(senha, user.senha))
        return res.status(400).send({ error: 'Senha incorreta!' })

    user.senha = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
    })

    res.send({
        user,
        token
    })
})

module.exports = (app: { use: (arg0: string, arg1: Router) => any; }) => app.use('/auth', router)