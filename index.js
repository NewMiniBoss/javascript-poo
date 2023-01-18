import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User(`gabriel`, `gabs@gmail.com`, `11/01/2000`);
// console.log(novoUser.exibirInfo());

const novoAdmin = new Admin(`joao`, `jl@gmail.com`, `01/06/1969`);
console.log(novoAdmin.exibirInfo)