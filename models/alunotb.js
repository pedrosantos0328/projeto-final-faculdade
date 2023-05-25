const { Sequelize, Model } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init(
            {
                idAluno: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_ALUNO'

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
                idCurso: {
                    type: Sequelize.BIGINT,
                    field: 'ID_CURSO'
                }
            },
            {
                sequelize,
                modelName: 'ALUNO_TB',
                timestamps: false

            }
        );
        return this;
    }
    static associate (models) {
        this.belongsTo(models.CURSO_TB,{
            foreignKey: "ID_CURSO",
            as: "curso"
        });
    }
    
}

module.exports = Aluno