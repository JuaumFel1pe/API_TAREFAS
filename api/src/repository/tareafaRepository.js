import config from './connection.js'

export async function selecionarTarefas(){
    const sql = 'SELECT * FROM TB_TASKS;';
    const [resp] = await config.query(sql)
    return resp; 
};

export async function inserirTarefa(tarefa){
    const sql = `INSERT INTO TB_TASKS (DS_TAREFA, NR_ORDEM, BT_FINALIZADO, DT_CADASTRO)
    VALUES (?, ?, ?, ?);`
    const [resp] = await config.query(sql, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro])
    return resp[0];
};

export async function tarefasFinalizadas(){
    const sql = `SELECT * FROM TB_TASKS
    WHERE BT_FINALIZADO = 1;`
    const [resp] = await config.query(sql)
    return resp;
};

export async function alterarTarefa(tarefa, id){
    const sql = `UPDATE TB_TASKS
    SET DS_TAREFA = ?,
        NR_ORDEM= ?,
        BT_FINALIZADO= ?,
        DT_CADASTRO = ?
    WHERE ID_TAREFA=?;`
    const [resp]= await config.query(sql, [tarefa.tarefa, tarefa.order, tarefa.finalizado, tarefa.cadastro, id])
    return resp.affectedRows;
};

export async function deletarTarefa(id){
    const sql = `DELETE FROM TB_TASKS
    WHERE ID_TAREFA = ?;`
    const [resp] = await config.query(sql, [id])
    return resp.affectedRows;
};