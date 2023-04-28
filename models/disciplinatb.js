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
                disciplina_1: {
                    type: Sequelize.STRING(255),
                    field: 'DISCIPLINA_1',
                    allowNull: false
                },
                disciplina_2: {
                    type: Sequelize.STRING(255),
                    field: 'DISCIPLINA_2',
                    allowNull: false
                },
                disciplina_3: {
                    type: Sequelize.STRING(255),
                    field: 'DISCIPLINA_3',
                    allowNull: false
                },
                disciplina_4: {
                    type: Sequelize.STRING(255),
                    field: 'DISCIPLINA_4',
                    allowNull: false
                },
            },
            {
                sequelize,
                modelName: 'DISCIPLINA_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Disciplina