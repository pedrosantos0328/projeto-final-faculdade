const Database = require('../../database/conectDb');
const Curso = require('../../models/cursotb');
const Disciplina = require('../../models/disciplinatb');
class DisciplinaService {



async listarDisciplina() {
    const db = new Database();
    let arrRetornoFormatado = [];
    try {
        const result = await Disciplina.findAll({
            include: [
                {
                    model: Curso,
                    as: "curso"
                }
            ],
            nest: true,
            raw: true
        });
        if (result) {
            for (let contador = 0; contador < result.length; contador++) {
                arrRetornoFormatado.push({
                    idDisciplina: result[contador].idDisciplina,
                    disciplina: result[contador].disciplina,
                    idCurso: result[contador].idCurso,
                    curso: result[contador].curso.curso
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

async consultarDisciplinaPorId(idDisciplina) {
    const db = new Database();
    try {
        const result = await Disciplina.findOne({
            include: [
                {
                    model: Curso,
                    as: "curso"
                }

            ],
            nest: true,
            raw: true,
            where: {
                idDisciplina:idDisciplina
            }
        });
        if(result) {
            return {
                idDisciplina: result.idDisciplina,
                disciplina: result.disciplina,
                idCurso: result.idCurso,
                curso: result.curso.curso
            }
        }
        return "Informação não encontrada!";
    }
    catch (erro) {
        return erro;
    }
}

async criarDisciplina(body) {
    const db = new Database();
    try {
        const {disciplina, idCurso} = body;
    
        const insert = await Disciplina.create({disciplina, idCurso});
        if (insert) {
            return {
                message: `Disciplina de ${disciplina} foi incluido com sucesso`
            }
        }
        return {
            message: "Falha ao incluir curso"
        };
    } catch (erro) {
        return erro;
    }
}

async alterarDisciplina(idDisciplina, body) {
    const db = new Database();
    try {
        const {disciplina, idCurso} = body;
        const update = await Disciplina.update({disciplina, idCurso}, {
            where: {
                idDisciplina: idDisciplina
            }
        });
        if (update) {
            return {
                message: `Dados da disciplina de ${disciplina} foi alterado com sucesso`
            }
        }
        return {
            message: "Falha ao alterar disciplina"
        };
    } catch (erro) {
        return erro;
    }
}

async deletarDisciplina(idDisciplina) {
    const db = new Database();
    try {
        const dell = await Disciplina.destroy({
            where: {
                idDisciplina: idDisciplina
            }
        });
        if (dell) {
            return {
                message: `Dados da disciplina foi deletada com sucesso`
            }
        }
        return {
            message: "Falha ao deletar disciplina"
        };
    } catch (erro) {
        return erro;
    }
}
}

module.exports = DisciplinaService;