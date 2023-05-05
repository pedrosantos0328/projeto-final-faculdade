const AlunoService = require("../service/alunoService");
const alunoService = new AlunoService();
class AlunoController {


async listarAluno() {
    return await alunoService.listarAluno();
}

async consultarAlunoPorId(idAluno) {
    return await alunoService.consultarAlunoPorId(idAluno);
}

async criarAluno(body) {
    return await alunoService.criarAluno(body);
}

async alterarAluno(body, idAluno) {
    return await alunoService.alterarAluno(body, idAluno);
}
async deletarAluno(idAluno) {
    return await alunoService.deletarAluno(idAluno);
}

async criarAlunoEmLote(body) {
    return await alunoService.criarAlunoEmLote(body);
}
}

module.exports = AlunoController;