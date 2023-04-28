const ProfessorService = require("../service/professorService");
const professorService = new ProfessorService();
class ProfessorController {


async listarProfessor() {
    return await professorService.listarProfessor();
}

async consultarProfessorPorId(idProfessor) {
    return await professorService.consultarProfessorPorId(idProfessor);
}

}

module.exports = ProfessorController;