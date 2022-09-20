function aritmetica(inicial,razao) {
    let sequencia = [] ;
    for (let i = 1; i <= 10; i++) {
        sequencia.push(inicial);
        inicial += razao;
    }
    document.write(sequencia);
}

aritmetica(5,8)