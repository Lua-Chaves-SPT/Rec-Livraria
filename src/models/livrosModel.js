var database = require("../database/config");

function listar() {

    var instrucaoSql = `
        select 
livro.id,
livro.titulo,
livro.precoCompra,
livro.precoVenda,
livro.estoque,
autor.nome as nomeAutor,
genero.nome as nomeGenero

 from livro join autor on autor.id = livro.fkAutor join genero on genero.id = livro.fkGenero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrar(titulo, fkAutor, fkGenero, precoCompra, precoVenda, estoque) {

    var instrucaoSql = `
        INSERT INTO livro (titulo, fkAutor, fkGenero, precoCompra, precoVenda, estoque) VALUES ('${titulo}', '${fkAutor}', '${fkGenero}', '${precoCompra}', '${precoVenda}', '${estoque}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoPrecoCompra, novoPrecoVenda, id) {

    var instrucaoSql = `
        UPDATE livro 
        SET precoCompra = '${novoPrecoCompra}', 
            precoVenda = '${novoPrecoVenda}'
        WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autoresCaros(){

    var instrucaoSql = `
        SELECT sum(livro.precoCompra), autor.nome 
        FROM livro JOIN autor
        ON livro.fkAutor = autor.id
        GROUP BY autor.id
        ORDER BY sum(livro.precoCompra) DESC LIMIT 3;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function maiorGenero(){

    var instrucaoSql = `
        SELECT genero.nome as genero, sum(livro.estoque) as estoque
        FROM livro JOIN genero
        ON livro.fkGenero = genero.id
        GROUP BY genero.nome
        ORDER BY sum(livro.estoque) DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarGeneros(){

    var instrucaoSql = `
        SELECT genero.nome, sum(livro.estoque)
        FROM livro JOIN genero
        ON livro.fkGenero = genero.id
        GROUP BY genero.nome
        ORDER BY sum(livro.estoque) DESC;
    `;
       console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    listar,
    cadastrar,
    editar,
    autoresCaros,
    maiorGenero,
    listarGeneros
}
