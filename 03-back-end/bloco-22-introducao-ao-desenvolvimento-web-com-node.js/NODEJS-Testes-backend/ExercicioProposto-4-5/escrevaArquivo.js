const fs = require('fs');

function escrevaArquivo (nome, conteudo) {
    fs.writeFileSync(`${__dirname}/${nome}`, conteudo);

    return 'ok'
}

module.exports = escrevaArquivo;