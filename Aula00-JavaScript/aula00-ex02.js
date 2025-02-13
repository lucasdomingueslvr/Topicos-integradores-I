//Exemplo 2
//Funções Simples

function saudacao(nome){
    return "Olá," +nome + "!"
}

console.log(saudacao(34));

//Funcao Anonima ()

const soma = function(a,b){
    return a + b;
};

console.log(soma(10,15));

//Arrow Function (função de seta)
const multiplicacao = (x, y) => x*y;
console.log(multiplicacao(5,6));
// Obj em JS
const pessoa = {
    nomeUsuario: "Rafael marinho",
    idade: 34,
    email: "rafaelmarinho@nipam.edu.br",
    usuario: "Professor",
    saudar: function(){
        return "Oi, meu nome é " +this.nomeUsuario + " e eu sou um " + this.usuario + ".";
    }
}
console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar());