const Database = require('../../database/conectDb');
const Curso = require('../../models/cursotb');
class CursoService {



async listarCurso() {
    const db = new Database();
    try {
        const result = await Curso.findAll();
        if (result) {
            return result;
        }
        return "Informação não encontrada!";
    }
    catch (erro) {
        console.log(erro);
        return erro;
    }
}

async consultarCursoPorId(idCurso) {
    const db = new Database();
    try {
        const result = await Curso.findOne({
            where: {
                idCurso:idCurso
            }
        });
        if(result) {
            return result;
        }
        return "Informação não encontrada!";
    }
    catch (erro) {
        return erro;
    }
}

async criarCurso(body) {
    const db = new Database();
    try {
        const { curso} = body;
    
        const insert = await Curso.create({ curso });
        if (insert) {
            return {
                message: `Curso de ${curso} foi incluido com sucesso`
            }
        }
        return {
            message: "Falha ao incluir curso"
        };
    } catch (erro) {
        return erro;
    }
}

async alterarCurso(idCurso, body) {
    const db = new Database();
    try {
        const { curso } = body;
        const update = await Curso.update({ curso}, {
            where: {
                idCurso: idCurso
            }
        });
        if (update) {
            return {
                message: `Dados do curso de ${curso} foi alterado com sucesso`
            }
        }
        return {
            message: "Falha ao alterar curso"
        };
    } catch (erro) {
        return erro;
    }
}

async deletarCurso(idCurso) {
    const db = new Database();
    try {
        const dell = await Curso.destroy({
            where: {
                idCurso: idCurso
            }
        });
        if (dell) {
            return {
                message: `Dados do curso foi deletado com sucesso`
            }
        }
        return {
            message: "Falha ao deletar curso"
        };
    } catch (erro) {
        return erro;
    }
}


}



module.exports = CursoService;