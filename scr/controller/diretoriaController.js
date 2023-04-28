const DiretoriaService = require("../service/diretoriaService");
const diretoriaService = new DiretoriaService();
class DiretoriaController {


async listarDiretoria() {
    return await diretoriaService.listarDiretoria();
}

async consultarDiretoriaPorId(idDiretoria) {
    return await diretoriaService.consultarDiretoriaPorId(idDiretoria);
}

async criarDiretoria(body) {
    return await diretoriaService.criarDiretoria(body);
}

async alterarDiretoria(body, idDiretoria) {
    return await diretoriaService.alterarDiretoria(body, idDiretoria);
}
async deletarDiretoria(idDiretoria) {
    return await diretoriaService.deletarDiretoria(idDiretoria);
}
}









module.exports = DiretoriaController;