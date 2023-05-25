const Database = require('../../database/conectDb');
const Curso = require('../../models/cursotb');
const Diretoria = require('../../models/diretoriatb');
class CursoService {



async listarCurso() {
    const db = new Database();
    let arrRetornoFormatado = [];
    try {
        const result = await Curso.findAll({
            include: [
                {
                    model: Diretoria,
                    as: "diretoria"
                }
            ],
            nest: true,
            raw: true
        });
        if (result) {
            for (let contador = 0; contador < result.length; contador++) {
                arrRetornoFormatado.push({
                    idCurso: result[contador].idCurso,
                    curso: result[contador].curso,
                    idDiretoria: result[contador].idDiretoria,
                    diretoria: result[contador].diretoria.nome
                });
            }
            return arrRetornoFormatado;
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
            include: [
                {
                    model: Diretoria,
                    as: "diretoria"
                }

            ],
            nest: true,
            raw: true,
            where: {
                idCurso:idCurso
            }
        });
        if(result) {
            return {
                idCurso: result.idCurso,
                curso: result.curso,
                idDiretoria: result.idDiretoria,
                diretoria: result.diretoria.nome  
            }
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
        const { curso, idDiretoria} = body;
    
        const insert = await Curso.create({ curso, idDiretoria });
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
        const { curso, idDiretoria } = body;
        const update = await Curso.update({ curso, idDiretoria}, {
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