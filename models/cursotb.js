const { Sequelize, Model } = require('sequelize');

class Curso extends Model {
    static init(sequelize) {
        super.init(
            {
                idCurso: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_CURSO'
               
                },
                curso_1: {
                    type: Sequelize.STRING(255),
                    field: 'CURSO_1',
                    allowNull: false
                },
                curso_2: {
                    type: Sequelize.STRING(255),
                    field: 'CURSO_2',
                    allowNull: false
                },
                curso_3: {
                    type: Sequelize.STRING(255),
                    field: 'CURSO_3',
                    allowNull: false
                },
                curso_4: {
                    type: Sequelize.STRING(255),
                    field: 'CURSO_4',
                    allowNull: false
                },
            },
            {
                sequelize,
                modelName: 'CURSO_TB',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Curso