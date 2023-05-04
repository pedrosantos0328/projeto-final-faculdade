const CursoService = require("../service/cursoService");
const cursoService = new CursoService();
class CursoController {


async listarCurso() {
    return await cursoService.listarCurso();
}

async consultarCursoPorId(idCurso) {
    return await cursoService.consultarCursoPorId(idCurso);
}

async criarCurso(body) {
    return await cursoService.criarCurso(body);
}

async alterarCurso(body, idCurso) {
    return await cursoService.alterarCurso(body, idCurso);
}
async deletarCurso(idCurso) {
    return await cursoService.deletarCurso(idCurso);
}
}

module.exports = CursoController;