const DisciplinaService = require("../service/disciplinaService");
const disciplinaService = new DisciplinaService();
class DisciplinaController {


async listarDisciplina() {
    return await disciplinaService.listarDisciplina();
}

async consultarDisciplinaPorId(idDisciplina) {
    return await disciplinaService.consultarDisciplinaPorId(idDisciplina);
}

async criarDisciplina(body) {
    return await disciplinaService.criarDisciplina(body);
}

async alterarDisciplina(body, idDisciplina) {
    return await disciplinaService.alterarDisciplina(body, idDisciplina);
}
async deletarDisciplina(idDisciplina) {
    return await disciplinaService.deletarDisciplina(idDisciplina);
}
}

module.exports = DisciplinaController;