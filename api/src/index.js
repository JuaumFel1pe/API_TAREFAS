import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import tarefaController from './controller/tarefaController.js'

const server = express()
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, ()=>
console.log(`API ESTÁ ONLINE NA PORTA ${process.env.PORT}`))

server.use(tarefaController)