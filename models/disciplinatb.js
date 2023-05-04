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