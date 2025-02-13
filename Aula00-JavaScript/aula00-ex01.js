//Exemplo 01
//Usando var (escopo global/função)

var nome = "Lucas";
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}

console.log(nome);

//Usando let (escopo de bloco)
let idade = 20;
console.log(idade);

if(true){
    let idade = 21;
    console.log(idade);
}

console.log(idade);

//Usando const (escopo de bloco)

const PI = 3.14;
console.log(PI);

if(true){
    const PI = 5.12;
    console.log(PI);
}

console.log(PI);

