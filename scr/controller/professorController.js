const ProfessorService = require("../service/professorService");
const professorService = new ProfessorService();
class ProfessorController {


async listarProfessor() {
    return await professorService.listarProfessor();
}

async consultarProfessorPorId(idProfessor) {
    return await professorService.consultarProfessorPorId(idProfessor);
}

async criarProfessor(body) {
    return await professorService.criarProfessor(body);
}

async alterarProfessor(body, idProfessor) {
    return await professorService.alterarProfessor(body, idProfessor);
}
async deletarProfessor(idProfessor) {
    return await professorService.deletarProfessor(idProfessor);
}

}

module.exports = ProfessorController;