const Sequelize = require('sequelize');

require('dotenv').config();

const get = () => {
    const dbName = 'faculdade_db';
    const dbUser = 'root';
    const dbPassword = '';
    const dbHost = 'localhost';
    const dbPort = 3306;
    const dbDialect = 'mysql';
   console.log(dbName);
    return {
      dialect: dbDialect,
      host: dbHost,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      port: dbPort,
      logging: true,
      define: {
        underscored: false,
        underscoredAll: false,
        freezeTableName: true,
        timestamps: true,
      },
    };
  };
   
  module.exports = {
    get,
    Op: Sequelize.Op,
    Sequelize,
  };