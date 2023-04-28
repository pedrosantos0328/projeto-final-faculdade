const { Sequelize, Model } = require('sequelize');

class Diretoria extends Model {
    static init(sequelize) {
        super.init(
            {
                idDiretoria: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_DIRETORIA'
               
                },
                nome: {
                    type: Sequelize.STRING(255),
                    field: 'NOME',
                    allowNull: false
                },
                cpf: {
                    type: Sequelize.STRING(11),
                    field: 'CPF',
                    allowNull: false
                },
                endereco: {
                    type: Sequelize.STRING(255),
                    field: 'ENDERECO',
                    allowNull: false
                },
            },
            {
                sequelize,
                modelName: 'DIRETORIA_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Diretoria