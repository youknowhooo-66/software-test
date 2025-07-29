import { operacoes } from "../src/operacoes";

describe('funcao operacoes', () => {
    test('espero que a soma de dois numeros inteiros esteja correta', () => {
        expect(operacoes(1 ,2, "soma")).toBe(3)
    });
    test('espero que a soma de dois numeros decimais esteja correta', () => {
        expect(operacoes(1.5,2.5, "soma")).toBe(4)
    });
    test('espero que a soma de dois numeros negativos esteja correta', () => {
        expect(operacoes(-1,-2)).toBe(-3)
    });
    test('espero que a soma de duas letras esteja correta', () => {
        expect(operacoes('a','b')).toBe('Erro ao somar')
    });
});