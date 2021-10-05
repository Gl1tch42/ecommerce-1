import jwt from 'jsonwebtoken';
const authConfig = require('../../config/auth.json')

module.exports = (req: { headers: { authorization: any; }; userId: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { error: string; }): void; new(): any; }; }; }, next: () => void) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' })

    const parts = authHeader.split(' ')

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Token Error' })

        const [ scheme, token ] = parts;

        if (!/^Bearer$/i.test(scheme))
            return res.status(401).send({ error: 'Token malformatted' })

        jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
            if(err) return res.status(401).send({ error: 'Token inválido.' })

            req.userId = decoded.id;
            return next();
        })
};