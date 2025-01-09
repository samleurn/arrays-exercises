const notas = [9, 8, 6, 10];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

const media = somaNotas / notas.length;
console.log(media);
