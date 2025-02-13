//Exemplo 3: Classes

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    exibirInformacoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}

const cachorro = new Animal("Duck", "cachorro");
const gato = new Animal("Noel", "gato");
const lula = new Animal("zé pilantra", "lula");

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());
console.log(lula.exibirInformacoes());