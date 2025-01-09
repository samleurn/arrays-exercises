const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const media = lista[1][indice];
        console.log(`O aluno(a) ${aluno} apresenta a media de nota ${media}`);
    } else {
        console.log('O estudante não consta no sistema');
    }
}

exibeNomeENota('João'); 
exibeNomeENota('Miau'); 
