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
                  idProfessor: {
                    type: Sequelize.BIGINT,
                    field: 'ID_PROFESSOR'  
                },
                idCurso: {
                    type: Sequelize.BIGINT,
                    field: 'ID_CURSO'
                },
                idDisciplina: {
                    type: Sequelize.BIGINT,
                    field: 'ID_DISCIPLINA'
                },
                idDiretoria: {
                    type: Sequelize.BIGINT,
                    field: 'ID_DIRETORIA'
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
        this.belongsTo(models.PROFESSOR_TB,{
            foreignKey: "ID_PROFESSOR",
            as: "professor"
        });
        this.belongsTo(models.CURSO_TB,{
            foreignKey: "ID_CURSO",
            as: "curso"
        });
        this.belongsTo(models.DISCIPLINA_TB,{
            foreignKey: "ID_DISCIPLINA",
            as: "disciplina"
        });
        this.belongsTo(models.DIRETORIA_TB,{
            foreignKey: "ID_DIRETORIA",
            as: "diretoria"
        });
    }
    
}

module.exports = Aluno