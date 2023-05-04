const Database = require('../../database/conectDb');
const Disciplina = require('../../models/disciplinatb');
class DisciplinaService {



async listarDisciplina() {
    const db = new Database();
    try {
        const result = await Disciplina.findAll();
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

async consultarDisciplinaPorId(idDisciplina) {
    const db = new Database();
    try {
        const result = await Disciplina.findOne({
            where: {
                idDisciplina:idDisciplina
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

async criarDisciplina(body) {
    const db = new Database();
    try {
        const {disciplina} = body;
    
        const insert = await Disciplina.create({disciplina});
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
        const {disciplina} = body;
        const update = await Disciplina.update({disciplina}, {
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