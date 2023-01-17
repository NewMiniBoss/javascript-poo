// usuário
const user = {
    nome: 'Mariana',
    email: 'mariana@gmail.com'
}
// função para exibir usuários com this
function exibeInfos() {
    console.log(this.nome, this.email)
}
// operador: call 
exibeInfos.call(user);

// criando um novo usuário com function
function User(nome, email) {
    this.nome = nome
    this.email = email
    // function
    this.exibeInfos = function () {
        console.log(this.nome, this.email)
    }
}
// criando novo usuário
const newUser = new User('gabriel', 'gabriel76_@hotmail.com');

newUser.exibeInfos() // gabriel

const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
}

newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com