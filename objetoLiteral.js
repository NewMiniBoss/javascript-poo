const user = {
    nome: 'gabriel',
    email: 'gabriel.f.lazari@email.com',
    nascimento: '2000/01/11',
    role: 'admin',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}
// user.exibirInfos();

//  operator BIND(ligando ao objeto)
const exibindo = function () {
    console.log(this.nome);
}
const exibindoNome = exibindo.bind(user)
exibindoNome()