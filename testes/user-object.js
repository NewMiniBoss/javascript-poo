const user = {
    exibirInfo: function (nome, email) {
        return nome, email;
    }
}

const novoUser = Object.create(user);
console.log(novoUser.exibirInfo(`Gabriel`, `gabriel.f.lazari@gmail.com`));
console.log(user.isPrototypeOf(novoUser));