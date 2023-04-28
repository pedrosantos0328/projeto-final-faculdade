const Sequelize = require('sequelize');
const databaseConfig = require('../config/DB');
const AlunoTb = require('../models/alunotb');
const ProfessorTb = require('../models/professortb');
const DiretoriaTb = require('../models/diretoriatb');
const CursoTb = require('../models/cursotb');
const DisciplinaTb = require('../models/disciplinatb');
const models = [AlunoTb, CursoTb, ProfessorTb, DisciplinaTb, DiretoriaTb];

class Database {
    constructor() {
      this.init();
    }
   
    init() {
      this.connection = new Sequelize(databaseConfig.get());
      models
        .map((model) => model.init(this.connection))
        .map((model) => model.associate &&
          model.associate(this.connection.models));
    }
   
    close() {
      return this.connection.close();
    }
  }
   
  module.exports = Database;