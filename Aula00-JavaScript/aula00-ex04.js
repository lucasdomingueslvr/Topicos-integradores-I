//Função que recebe um objeto como argumento
function exibirInfoProdutos(produto){
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} unidade.`;
}

const produto = {
    nome: "Pacote",
    preco: 12,
    estoque: 2
}
const produto2 = {
    nome: "Notebook",
    preco: 40,
    estoque: 1
}
console.log(exibirInfoProdutos(produto));
console.log(exibirInfoProdutos(produto2))