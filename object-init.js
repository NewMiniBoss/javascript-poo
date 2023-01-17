const user = {
    init: function (nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfo: function () {
        return console.log(`${this.nome}, ${this.email}`)
    }
}

const novoUser = Object.create(user);
novoUser.init(`gabriel`, `gabriel@gmail.com`);
novoUser.exibirInfo()