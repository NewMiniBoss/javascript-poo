import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarAluno(aluno) {
        return `O aluno ${aluno} está aprovado`;
    }
}

const newDocente = new Docente(`joao`, `lazari@gmail.com`, `16/06/1969`);
console.log(newDocente);
console.log(newDocente.aprovarAluno(`gabriel`));
console.log(newDocente.exibirInfo());