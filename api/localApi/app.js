const express = require("express");
const app = express();
const DiretoriaController = require("../../scr/controller/diretoriaController");
const diretoriaController = new DiretoriaController();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/listar-diretoria", async function (request, response) {
    const result = await diretoriaController.listarDiretoria();
    return response.json(result);
});
app.get("/consultar-diretoria-por-id/:idDiretoria", async function (request, response) {
    const idDiretoria = request.params.idDiretoria;
    const result = await diretoriaController.consultarDiretoriaPorId(idDiretoria);
    return response.json(result);
});
app.post("/criar-diretoria", async function (req, res) {
    const body = req.body;
    const result = await diretoriaController.criarDiretoria(body);
    return res.json(result);
});
app.put("/alterar-diretoria/:idDiretoria", async function (req, res) {
    const body = req.body;
    const idDiretoria = req.params.idDiretoria;
    if(req.body.nome) {
        const result = await diretoriaController.alterarDiretoria(idDiretoria, body);
        return res.json(result);  
    } 
    else {
        return res.json("Necessário passar campos obrigatórios: nome, cpf, endereco");
    }
});
app.delete("/deletar-diretoria/:idDiretoria", async function (req, res) {
    const idDiretoria = req.params.idDiretoria;
    const result = await diretoriaController.deletarDiretoria(idDiretoria);
    return res.json(result);
});




module.exports = app;