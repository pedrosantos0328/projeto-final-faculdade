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
                idDiretoria: {
                    type: Sequelize.BIGINT,
                    field: 'ID_DIRETORIA'
                }
            },
            {
                sequelize,
                modelName: 'CURSO_TB',
                timestamps: false

            }
        );
        return this;
    }

    static associate (models) {
        this.belongsTo(models.DIRETORIA_TB,{
            foreignKey: "ID_DIRETORIA",
            as: "diretoria"
        });
    }
        
}
module.exports = Curso