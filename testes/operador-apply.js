function exibeMensangem(nome, email) {
    console.log(`usuário: ${nome}, email: ${email}`);
}

const user = {
    nome: 'gabriel',
    email: 'gabriel.f.lazari@gmail.com',
    executaFuncao: function(fn) {
        fn.apply(user, [this.nome, this.email]);
    }
}

user.executaFuncao(exibeMensangem);