function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfo = function () {
        return `${this.nome}, ${this.email}`;
    }
}

// const novoUser = new User('Gabriel', 'gabriel.f.lazari@gmail.com');
// novoUser.exibirInfo();

function Admin(role) {
    User.call(this, 'gabriel', 'gabriel.f.lazari@gmail.com');
    this.role = role || 'estudante';
}

Object.setPrototypeOf(Admin, User);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfo());
console.log(novoUser.role)