const axios = require('axios');
const Database = require('../../database/conectDb');
const { Sequelize } = require('../../config/DB');
const { Op } = require('../../config/DB');
const Diretoria = require('../../models/diretoriatb');
class DiretoriaService {



async listarDiretoria() {
    const db = new Database();
    try {
        const result = await Diretoria.findAll({});
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

async consultarDiretoriaPorId(idDiretoria) {
    const db = new Database();
    try {
        const result = await Diretoria.findOne({
            where: {
                idDiretoria:idDiretoria
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

async criarDiretoria(body) {
    const db = new Database();
    try {
        const { nome, cpf, endereco} = body;
        const verificaDiretor = await Diretoria.findOne({
            where: {
                cpf: cpf
            }
        });
        if(verificaDiretor) {
            return {
                message: `Funcionario ${nome} já existe`
            }
        }
        const insert = await Diretoria.create({ nome, cpf, endereco });
        if (insert) {
            return {
                message: `Diretor ${nome} foi incluido com sucesso`
            }
        }
        return {
            message: "Falha ao incluir diretor"
        };
    } catch (erro) {
        return erro;
    }
}

async alterarDiretoria(idDiretoria, body) {
    const db = new Database();
    try {
        const { nome, cpf, endereco } = body;
        const update = await Diretoria.update({ nome, cpf, endereco}, {
            where: {
                idDiretoria: idDiretoria
            }
        });
        if (update) {
            return {
                message: `Dados do Diretor(a) ${nome} foi alterado com sucesso`
            }
        }
        return {
            message: "Falha ao alterar diretor"
        };
    } catch (erro) {
        return erro;
    }
}

async deletarDiretoria(idDiretoria) {
    const db = new Database();
    try {
        const dell = await Diretoria.destroy({
            where: {
                idDiretoria: idDiretoria
            }
        });
        if (dell) {
            return {
                message: `Dados do Diretor foi deletado com sucesso`
            }
        }
        return {
            message: "Falha ao deletar Diretor"
        };
    } catch (erro) {
        return erro;
    }
}


}



module.exports = DiretoriaService;