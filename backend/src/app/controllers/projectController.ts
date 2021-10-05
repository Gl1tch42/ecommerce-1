import express, { Router } from 'express';
const authMiddleware = require('../middleware/auth')

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId })
})

module.exports = (app: { use: (arg0: string, arg1: Router) => any; }) => app.use('/projects', router)