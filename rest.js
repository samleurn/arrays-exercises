//O rest so pode ser feito com o mesmo tipo de dado que o declarado tipo const e const ou let e let

const numeros = [10, 20, 30, 40, 50, 60]
const [n1, n2, n3, ...resto] = numeros

console.log(n1, n2, n3)
console.log(resto);
