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
                curso: {
                    type: Sequelize.STRING(255),
                    field: 'CURSO',
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