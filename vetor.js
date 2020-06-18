const programador = {
    nome: 'Adrielle',
    idade: 23,
    tecnologias: [
        { nome: 'JavaScript', especialidade: 'web' },
        { nome: 'Node.js', especialidade: 'Server API' }
    ]
}

console.log(`o usuário(a) ${programador.nome} tem ${programador.idade} anos e usa ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`);