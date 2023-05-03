const Database = require('../../database/conectDb');
const { Sequelize } = require('../../config/DB');
const { Op } = require('../../config/DB');
const Professor = require('../../models/professortb');
class ProfessorService {


    async listarProfessor() {
        const db = new Database();
        try {
            const result = await Professor.findAll({});
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
    
    async consultarProfessorPorId(idProfessor) {
        const db = new Database();
        try {
            const result = await Professor.findOne({
                where: {
                    idProfessor:idProfessor
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

    async criarProfessor(body) {
        const db = new Database();
        try {
            const { nome, cpf, endereco} = body;
            const verificaProfessor = await Professor.findOne({
                where: {
                    cpf: cpf
                }
            });
            if(verificaProfessor) {
                return {
                    message: `Professor ${nome} já existe`
                }
            }
            const insert = await Professor.create({ nome, cpf, endereco });
            if (insert) {
                return {
                    message: `Professor ${nome} foi incluido com sucesso`
                }
            }
            return {
                message: "Falha ao incluir professor"
            };
        } catch (erro) {
            return erro;
        }
    }
    
    async alterarProfessor(idProfessor, body) {
        const db = new Database();
        try {
            const { nome, cpf, endereco } = body;
            const update = await Professor.update({ nome, cpf, endereco}, {
                where: {
                    idProfessor: idProfessor
                }
            });
            if (update) {
                return {
                    message: `Dados do professor(a) ${nome} foi alterado com sucesso`
                }
            }
            return {
                message: "Falha ao alterar professor"
            };
        } catch (erro) {
            return erro;
        }
    }
    
    async deletarProfessor(idProfessor) {
        const db = new Database();
        try {
            const dell = await Professor.destroy({
                where: {
                    idProfessor: idProfessor
                }
            });
            if (dell) {
                return {
                    message: `Dados do professor foi deletado com sucesso`
                }
            }
            return {
                message: "Falha ao deletar professor"
            };
        } catch (erro) {
            return erro;
        }
    }





























}

module.exports = ProfessorService;