import express, { Express } from 'express'
import cors from 'cors';
import routes from '../../routes';

export default function appMiddleware(app: Express): void {
    app.use(cors())
    app.use(express.json())
    app.use(routes);
}