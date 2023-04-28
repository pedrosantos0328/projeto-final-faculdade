const axios = require('axios');
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





























}

module.exports = ProfessorService;