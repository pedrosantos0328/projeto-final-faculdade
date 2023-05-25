const express = require("express");
const app = express();
const DiretoriaController = require("../../scr/controller/diretoriaController");
const diretoriaController = new DiretoriaController();
const ProfessorController = require("../../scr/controller/professorController");
const professorController = new ProfessorController();
const CursoController = require("../../scr/controller/cursoController");
const cursoController = new CursoController();
const DisciplinaController = require("../../scr/controller/disciplinaController");
const disciplinaController = new DisciplinaController();
const AlunoController = require("../../scr/controller/alunoController");
const alunoController = new AlunoController();

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
app.get("/listar-curso", async function (request, response) {
    const result = await cursoController.listarCurso();
    return response.json(result);
});
app.get("/consultar-curso-por-id/:idCurso", async function (request, response) {
    const idCurso = request.params.idCurso;
    const result = await cursoController.consultarCursoPorId(idCurso);
    return response.json(result);
});
app.post("/criar-curso", async function (req, res) {
    const body = req.body;
    const result = await cursoController.criarCurso(body);
    return res.json(result);
});
app.put("/alterar-curso/:idCurso", async function (req, res) {
    const body = req.body;
    const idCurso = req.params.idCurso;
    if(req.body.curso) {
        const result = await cursoController.alterarCurso(idCurso, body);
        return res.json(result);  
    } 
    else {
        return res.json("Necessário passar campos obrigatórios: curso");
    }
});
app.delete("/deletar-curso/:idCurso", async function (req, res) {
    const idCurso = req.params.idCurso;
    const result = await cursoController.deletarCurso(idCurso);
    return res.json(result);
});
app.get("/listar-disciplina", async function (request, response) {
    const result = await disciplinaController.listarDisciplina();
    return response.json(result);
});
app.get("/consultar-disciplina-por-id/:idDisciplina", async function (request, response) {
    const idDisciplina = request.params.idDisciplina;
    const result = await disciplinaController.consultarDisciplinaPorId(idDisciplina);
    return response.json(result);
});
app.post("/criar-disciplina", async function (req, res) {
    const body = req.body;
    const result = await disciplinaController.criarDisciplina(body);
    return res.json(result);
});
app.put("/alterar-disciplina/:idDisciplina", async function (req, res) {
    const body = req.body;
    const idDisciplina = req.params.idDisciplina;
    if(req.body.disciplina) {
        const result = await disciplinaController.alterarDisciplina(idDisciplina, body);
        return res.json(result);  
    } 
    else {
        return res.json("Necessário passar campos obrigatórios: disciplina");
    }
});
app.delete("/deletar-disciplina/:idDisciplina", async function (req, res) {
    const idDisciplina = req.params.idDisciplina;
    const result = await disciplinaController.deletarDisciplina(idDisciplina);
    return res.json(result);
});
app.get("/listar-aluno", async function (request, response) {
    const result = await alunoController.listarAluno();
    return response.json(result);
});
app.get("/consultar-aluno-por-id/:idAluno", async function (request, response) {
    const idAluno = request.params.idAluno;
    const result = await alunoController.consultarAlunoPorId(idAluno);
    return response.json(result);
});
app.post("/criar-aluno", async function (req, res) {
    const body = req.body;
    const result = await alunoController.criarAluno(body);
    return res.json(result);
});
app.put("/alterar-aluno/:idAluno", async function (req, res) {
    const body = req.body;
    const idAluno = req.params.idAluno;
    if(req.body.nome && req.body.cpf && req.body.endereco) {
        const result = await alunoController.alterarAluno(idAluno, body);
        return res.json(result);  
    } 
    else {
        return res.json("Necessário passar campos obrigatórios: nome, cpf, endereco");
    }
});
app.delete("/deletar-aluno/:idAluno", async function (req, res) {
    const idAluno = req.params.idAluno;
    const result = await alunoController.deletarAluno(idAluno);
    return res.json(result);
});
app.post("/criar-aluno-em-lote", async function (req, res) {
    const body = req.body;
    const result = await alunoController.criarAlunoEmLote(body);
    return res.json(result);
});
app.get("/consultar-aluno-por-filtro", async function (req, response) {
    const filtro = req.query;
    const result = await alunoController.consultarAlunoPorFiltro(filtro);
    return response.json(result);
});






module.exports = app;