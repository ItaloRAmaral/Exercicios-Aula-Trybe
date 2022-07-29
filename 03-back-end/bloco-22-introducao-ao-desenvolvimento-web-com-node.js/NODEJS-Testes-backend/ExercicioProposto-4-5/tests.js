const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const escrevaArquivo = require('./escrevaArquivo');

describe('Executa função escrevaArquivo', () => {
   before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('a resposta', () => {
    it('é uma string', () => {
      const resposta = escrevaArquivo('teste.txt', 'teste');
      expect(resposta).to.be.a('string');
    })
    
    it('é ok', () => {
      const resposta = escrevaArquivo('teste.txt', 'teste');
      expect(resposta).to.be.equals('ok');
    })
  })
})

