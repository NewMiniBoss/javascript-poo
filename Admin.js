import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas) {
        return `O novo curso ${nomeDoCurso} tem ${vagas} vagas.`
    }
}

const newAdmin = new Admin(`gabriel`, `gabs76@gmail.com`, `11/01/2000`);
console.log(newAdmin);
console.log(newAdmin.criarCurso(`javascript`, 40));