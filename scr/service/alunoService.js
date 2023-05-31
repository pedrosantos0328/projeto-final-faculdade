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
            const arrAlunos = await Aluno.findAll({
                include: [
                    {
                        model: Curso,
                        as: "curso"
                    }
                ],
                nest: true,
                raw: true
            });

            if (arrAlunos) {
                for (let contador = 0; contador < arrAlunos.length; contador++) {
                    arrRetornoFormatado.push({
                        idAluno: arrAlunos[contador].idAluno,
                        aluno: arrAlunos[contador].nome,
                        cpf: arrAlunos[contador].cpf,
                        endereco: arrAlunos[contador].endereco,
                        idCurso: arrAlunos[contador].idCurso,
                        curso: arrAlunos[contador].curso.curso
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
            const aluno = await Aluno.findOne({
                include: [
                    {
                        model: Curso,
                        as: "curso"
                    }
                ],
                nest: true,
                raw: true,
                where: {
                    idAluno: idAluno
                }
            });

            if (aluno) {
                return {
                    idAluno: aluno.idAluno,
                    aluno: aluno.nome,
                    cpf: aluno.cpf,
                    endereco: aluno.endereco,
                    idCurso: aluno.idCurso,
                    curso: aluno.curso.curso    
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
            const { nome, cpf, endereco, idCurso} = body;
            const verificaAluno = await Aluno.findOne({
                where: {
                    cpf: cpf
                }
            });

            if (verificaAluno) {
                return {
                    message: `Aluno ${nome} já existe`
                }
            }
            
            const insert = await Aluno.create({ nome, cpf, endereco, idCurso});
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
            const { nome, cpf, endereco, idCurso} = body;
            const update = await Aluno.update({ nome, cpf, endereco, idCurso }, {
                where: {
                    idAluno: idAluno
                }
            });
            if (update) {
                return {
                    message: `Dados do aluno(a) ${nome} foram alterados com sucesso`
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
            let qtdAlunosIncluidos = 0;
            for (let contador = 0; contador < body.length; contador++) {
                let nome = body[contador].nome
                let cpf = body[contador].cpf
                let endereco = body[contador].endereco
                let idCurso = body[contador].idCurso

                const verificaAluno = await Aluno.findOne({
                    where: {
                        cpf: cpf
                    }
                });

                if (!verificaAluno) {
                    qtdAlunosIncluidos++;
                    await Aluno.create({ nome, cpf, endereco, idCurso });
                }
            }

            return {
                message: ` ${qtdAlunosIncluidos} alunos foram incluidos com sucesso`
            }
        } catch (erro) {
            return erro;
        }
    }

    async consultarAlunoPorFiltro(filtro) {
        const db = new Database();
        try {
            let where = {};
            if (filtro.idAluno) {
                where.idAluno = filtro.idAluno;
            }
            if (filtro.idCurso) {
                where.idCurso = filtro.idCurso;
            }
            if (filtro.nome) {
                where.nome = filtro.nome;
            }
            if (filtro.cpf) {
                where.cpf = filtro.cpf;
            }
            const result = await Aluno.findAll({
                where
            });

            if (result.length) {
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