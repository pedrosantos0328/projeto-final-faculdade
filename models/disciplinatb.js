const { Sequelize, Model } = require('sequelize');

class Disciplina extends Model {
    static init(sequelize) {
        super.init(
            {
                idDisciplina: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_DISCIPLINA'
               
                },
                disciplina: {
                    type: Sequelize.STRING(255),
                    field: 'DISCIPLINA',
                    allowNull: false
                },
                idCurso: {
                    type: Sequelize.BIGINT,
                    field: 'ID_CURSO'
                }
            },
            {
                sequelize,
                modelName: 'DISCIPLINA_TB',
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
module.exports = Disciplina