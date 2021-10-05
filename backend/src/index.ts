import express from 'express';
import bodyParser from 'body-parser';
import "dotenv/config"
import connectToMongoDB from './database';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

require('./app/controllers/index')(app);

const PORT = process.env.PORT || process.env.LOCAL_PORT

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`, connectToMongoDB()));
