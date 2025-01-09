const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//Retirar os elementos repetidos
const nomesAtualizados = new Set(nomes);

//Transformar o set em um array com o operador de espalhamento "[...array]"
const listaNomesAtualizados1 = [...nomesAtualizados];

//Versão simplificada do codigo acima
const listaNomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);