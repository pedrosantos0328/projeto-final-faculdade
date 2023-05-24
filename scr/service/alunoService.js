const Database = require('../../database/conectDb');
const Aluno = require('../../models/alunotb');
const Curso = require('../../models/cursotb');
const Diretoria = require('../../models/diretoriatb');
const Disciplina = require('../../models/disciplinatb');
const Professor = require('../../models/professortb');
class AlunoService {



async listarAluno() {
    const db = new Database();
    let arrRetornoFormatado = [];
    try {
        const result = await Aluno.findAll({
            include: [
                {
                    model: Curso,
                    as: "curso"
                },
                {
                    model: Diretoria,
                    as: "diretoria"
                },
                {
                    model: Disciplina,
                    as: "disciplina"
                },
                {
                    model: Professor,
                    as: "professor"
                }

            ],
            nest: true,
            raw: true
        });
        if (result)  {

            for (let contador = 0; contador < result.length; contador++) {
                arrRetornoFormatado.push({
                    idAluno: result[contador].idAluno,
                    aluno: result[contador].nome,
                    cpf: result[contador].cpf,
                    endereco: result[contador].endereco,
                    curso: result[contador].curso.curso,
                    idCurso: result[contador].idCurso,
                    diretoria: result[contador].diretoria.nome,
                    idDiretoria: result[contador].idDiretoria,
                    disciplina: result[contador].disciplina.disciplina,
                    idDisciplina: result[contador].idDisciplina,
                    professor: result[contador].professor.nome,
                    idProfessor: result[contador].idProfessor
                });
            }
            return arrRetornoFormatado;
        }
        return "Informação não encontrada!";
    }
    catch (erro) {
        console.log(erro);
        return erro;
    }
}

async consultarAlunoPorId(idAluno) {
    const db = new Database();
    try {
        const result = await Aluno.findOne({
            include: [
                {
                    model: Curso,
                    as: "curso"
                },
                {
                    model: Diretoria,
                    as: "diretoria"
                },
                {
                    model: Disciplina,
                    as: "disciplina"
                },
                {
                    model: Professor,
                    as: "professor"
                }

            ],
            nest: true,
            raw: true,
            where: {
                idAluno:idAluno
            }
        });
        if(result) {
            return {
                idAluno: result.idAluno,
                aluno: result.nome,
                cpf: result.cpf,
                endereco: result.endereco,
                curso: result.curso.curso,
                idCurso: result.idCurso,
                diretoria: result.diretoria.nome,
                idDiretoria: result.idDiretoria,
                disciplina: result.disciplina.disciplina,
                idDisciplina: result.idDisciplina,
                professor: result.professor.nome,
                idProfessor: result.idProfessor
            }
        }
        return "Informação não encontrada!";
    }
    catch (erro) {
        return erro;
    }
}

async criarAluno(body) {
    const db = new Database();
    try {
        const {nome, cpf, endereco, idProfessor, idDiretoria, idCurso, idDisciplina} = body;
        const verificaAluno = await Aluno.findOne({
            where: {
                cpf: cpf
            }
        });
        if(verificaAluno) {
            return {
                message: `Aluno ${nome} já existe`
            }
        } 
        const insert = await Aluno.create({nome, cpf, endereco, idProfessor, idDiretoria, idCurso, idDisciplina});
        if (insert) {
            return {
                message: `Aluno ${nome} foi incluido com sucesso`

            }
        }
        return {
            message: "Falha ao incluir aluno"
        };
    } catch (erro) {
        return erro;
    }
}

async alterarAluno(idAluno, body) {
    const db = new Database();
    try {
        const {nome, cpf, endereco, idProfessor, idDiretoria, idCurso, idDisciplina} = body;
        const update = await Aluno.update({nome, cpf, endereco, idProfessor, idDiretoria, idCurso, idDisciplina}, {
            where: {
                idAluno: idAluno
            }
        });
        if (update) {
            return {
                message: `Dados do aluno ${nome} foram alterados com sucesso`
            }
        }
        return {
            message: "Falha ao alterar aluno"
        };
    } catch (erro) {
        return erro;
    }
}

async deletarAluno(idAluno) {
    const db = new Database();
    try {
        const dell = await Aluno.destroy({
            where: {
                idAluno: idAluno
            }
        });
        if (dell) {
            return {
                message: `Os dados do aluno foram deletados com sucesso`
            }
        }
        return {
            message: "Falha ao deletar aluno"
        };
    } catch (erro) {
        return erro;
    }
}

async criarAlunoEmLote(body) {
    const db = new Database();
    try {
        for(let contador = 0; contador < body.length; contador++) {
            let nome = body[contador].nome
            let cpf = body[contador].cpf
            let endereco = body[contador].endereco
            let idDiretoria = body[contador].idDiretoria
            let idProfessor = body[contador].idProfessor
            let idDisciplina = body[contador].idDisciplina
            let idCurso = body[contador].idCurso
            await Aluno.create({nome, cpf, endereco, idProfessor, idDiretoria, idCurso, idDisciplina});
        const verificaAluno = await Aluno.findOne({
            where: {
                cpf: cpf
            }
        });
        if(verificaAluno) {
            return {
                message: `Funcionario ${nome} já existe`
            }
        }
        }
            return {
                message: ` ${body.length} alunos foram incluidos com sucesso`              
            }      
    } catch (erro) {
        return erro;
    }
}

async consultarAlunoPorFiltro(filtro) {
    const db = new Database();
    try {
        let where = {};
        if(filtro.idAluno) {
            where.idAluno = filtro.idAluno;
        }
        if(filtro.idCurso) {
            where.idCurso = filtro.idCurso;
        }
        if(filtro.nome) {
            where.nome = filtro.nome;
        }
        if(filtro.cpf) {
            where.cpf = filtro.cpf;
        }
        const result = await Aluno.findAll({
            where
        });

        if(result.length) {
            return result;        
        }
        return {
            message: "Aluno não encontrado"
        }
    }
    catch (erro) {
        return erro;
    }
}
}

module.exports = AlunoService;