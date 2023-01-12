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

const admin = {
    nome: 'mariana',
    email: 'mari@gmail.com',
    role: 'admin',
    criarCurso() {
        console.log('curso criado');
    }
}

// herdando propriedades // admin pegando function exibirInfos()
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
