function exibeMensangem(nome, email) {
    console.log(`O usuário é o ${nome} e seu email é ${email}`);
}

const user = {
    nome: 'gabriel',
    email: 'gabriel.f.lazari@gmail.com',
    
    executaFuncao: function(fn) {
        fn.call(user, this.nome, this.email)
    }
}

user.executaFuncao(exibeMensangem);