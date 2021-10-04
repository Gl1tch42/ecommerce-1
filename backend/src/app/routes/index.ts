import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send("Olá mundo!"));
routes.get('/users', (req,res) => res.send("Usuários:"))

export default routes;