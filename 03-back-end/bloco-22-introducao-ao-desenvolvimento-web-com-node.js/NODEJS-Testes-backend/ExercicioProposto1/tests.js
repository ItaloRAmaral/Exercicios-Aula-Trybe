const { expect } = require('chai');

const validaNumeros = require('./validaNumeros')

describe('Executa a função validaNumeros', () => {
  describe('quando o numero for maior que 0', () => {
    it('deve retornar Positivo', () => {
      expect(validaNumeros(1)).to.equal('Positivo');
    })
    it('valida se é uma string', () => {
      expect(validaNumeros(1)).to.be.a('string');
    })
  });

    describe('quando o numero for menor que 0', () => {
      it('deve retornar Negativo', () => {
        expect(validaNumeros(-1)).to.equal('Negativo');
      })
      it('valida se é uma string', () => {
        expect(validaNumeros(-1)).to.be.a('string');
      })
    });

    describe('quando o numero for igual 0', () => {
      it('deve retornar Neutro', () => {
        expect(validaNumeros(0)).to.equal('Neutro');
      })
      it('valida se é uma string', () => {
        expect(validaNumeros(0)).to.be.a('string');
      })
    });

    describe('quando parametro passado não é um numero', () => {
      it('deve retornar Erro', () => {
        expect(validaNumeros('a')).to.equal('o valor deve ser um número');
      })
    });
});