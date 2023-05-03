const express = require("express");
const app = express();
const DiretoriaController = require("../../scr/controller/diretoriaController");
const diretoriaController = new DiretoriaController();
const ProfessorController = require("../../scr/controller/professorController");
const professorController = new ProfessorController();
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
    if(req.body.nome && req.body.cpf && req.body.endereco) {
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
app.get("/listar-professor", async function (request, response) {
    const result = await professorController.listarProfessor();
    return response.json(result);
});
app.get("/consultar-professor-por-id/:idProfessor", async function (request, response) {
    const idProfessor = request.params.idProfessor;
    const result = await professorController.consultarProfessorPorId(idProfessor);
    return response.json(result);
});
app.post("/criar-professor", async function (req, res) {
    const body = req.body;
    const result = await professorController.criarProfessor(body);
    return res.json(result);
});
app.put("/alterar-professor/:idProfessor", async function (req, res) {
    const body = req.body;
    const idProfessor = req.params.idProfessor;
    if(req.body.nome && req.body.cpf && req.body.endereco) {
        const result = await professorController.alterarProfessor(idProfessor, body);
        return res.json(result);  
    } 
    else {
        return res.json("Necessário passar campos obrigatórios: nome, cpf, endereco");
    }
});
app.delete("/deletar-professor/:idProfessor", async function (req, res) {
    const idProfessor = req.params.idProfessor;
    const result = await professorController.deletarProfessor(idProfessor);
    return res.json(result);
});




module.exports = app;