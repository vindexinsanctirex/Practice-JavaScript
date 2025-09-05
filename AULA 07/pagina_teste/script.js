const alunos = [
    { nome: 'Ana', nota: 7.5},
    { nome: 'Beto', nota: 9.9},
    { nome: 'Carlos', nota: 6.7},
    { nome: 'Diego', nota: 4.6},
    { nome: 'Elena', nota: 5.5},
    { nome: 'Irina', nota: 7.9},
    { nome: 'Fernanda', nota: 8.7},
    { nome: 'Juliana', nota: 10.0},
    { nome: 'Elion', nota: 3.4},
    { nome: 'Igor', nota: 7.7}
]

alunos.filter((aluno) => {
    if(aluno.nota >= 7) {
        exibirDados(aluno);
    }
})

function exibirDados(aluno) {
    let container = document.querySelector('.container');
    console.log(container)
    container.innerHTML += `
        <div class="card">
            <h3>Aluno: ${aluno.nome}</h3>
            <p>Nota: ${aluno.nota}</p>
        </div>
    `
}

exibirDados()