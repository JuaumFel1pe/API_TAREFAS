import { Router } from 'express';
import { selecionarTarefas, deletarTarefa, inserirTarefa, tarefasFinalizadas, alterarTarefa } from '../repository/tareafaRepository.js';

const server = Router()

server.get('/tarefa', async (req, resp)=>{

        const data = await selecionarTarefas()
        resp.send(data)

})

server.post('/tarefa', async (req, resp) =>{
   try {
        const add= req.body
        const data = await inserirTarefa(add)
        resp.send(data)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/tarefa/finalizadas', async (req, resp) =>{
    try {
        const data= await tarefasFinalizadas()
        resp.send(data)
    } catch (err) {
        resp.status(400).send({
            erro: message
        })
    }
})

server.put('/tarefa/:id', async (req, resp) =>{
    try {
        const addID = req.params.id
        const add = req.body

        const data = await alterarTarefa(add, addID)
        if(data != 1)
                throw new error('A tarefa não pode ser alterada')
        else
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.delete('/tarefa/:id', async (req, resp) =>{
    try {
        const { id } = req.params
        const data = await deletarTarefa(id)
        if(data != 1)
            throw new Error('Tarefa não pode ser deletada');
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;