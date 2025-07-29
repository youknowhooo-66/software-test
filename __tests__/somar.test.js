import { somar } from "../src/somar";

describe('funcao somar', () => {
    test('espero que a soma de dois numeros inteiros esteja correta', () => {
        expect(somar(1,2)).toBe(3)
    });
    test('espero que a soma de dois numeros decimais esteja correta', () => {
        expect(somar(1.5,2.5)).toBe(4)
    });
    test('espero que a soma de dois numeros negativos esteja correta', () => {
        expect(somar(-1,-2)).toBe(-3)
    });
    test('espero que a soma de duas letras esteja correta', () => {
        expect(somar('a','b')).toBe('Erro ao somar')
    });
});