import { executarOperacao } from "../src/operacoes";

describe('funcao executarOperacao', () => {
    test('espero que a soma de dois numeros inteiros esteja correta', () => {
        expect(executarOperacao(1 ,2, "soma")).toBe(3)
    });
    test('espero que a soma de dois numeros decimais esteja correta', () => {
        expect(executarOperacao(1.5,2.5, "soma")).toBe(4)
    });
    test('espero que a soma de dois numeros negativos esteja correta', () => {
        expect(executarOperacao(-1,-2, "soma")).toBe(-3)
    });
    test('espero que a soma de duas frações esteja correta', () => {
        expect(executarOperacao(1/2,1/2,"soma")).toBe(1)
    });
    test('espero que a soma de duas letras esteja correta', () => {
        expect(executarOperacao('a','b',"soma")).toBe('Erro ao somar')
    });
    test('espero que a soma de duas letras esteja correta', () => {
        expect(executarOperacao(2,3,"multiplicacao")).toBe(6)
    });
    test('espero que a subtração de dois números inteiros esteja correta', () => {
        expect(executarOperacao(5, 3, "subtracao")).toBe(2);
    });
    test('espero que a subtração de dois números decimais esteja correta', () => {
        expect(executarOperacao(5.5, 2.5, "subtracao")).toBe(3);
    });
    test('espero que a subtração de dois números negativos esteja correta', () => {
        expect(executarOperacao(-5, -3, "subtracao")).toBe(-2);
    });
    test('espero que a multiplicação de dois números inteiros esteja correta', () => {
        expect(executarOperacao(4, 3, "multiplicacao")).toBe(12);
    });
    test('espero que a multiplicação de dois números decimais esteja correta', () => {
        expect(executarOperacao(2.5, 4, "multiplicacao")).toBe(10);
    });
    test('espero que a multiplicação de número negativo esteja correta', () => {
        expect(executarOperacao(-2, 3, "multiplicacao")).toBe(-6);
    });
    test('espero que a divisão de dois números inteiros esteja correta', () => {
        expect(executarOperacao(10, 2, "divisao")).toBe(5);
    });
    test('espero que a divisão de número decimal esteja correta', () => {
        expect(executarOperacao(8, 2, "divisao")).toBe(4);
    });
    test('espero que a divisão por zero retorne erro', () => {
        expect(executarOperacao(5, 2, "divisao")).toBe(2.5);
    });
    test('espero que a operação inválida retorne erro', () => {
        expect(executarOperacao(5, 3, "potencia")).toBe('erro: operação não existe');
    });    
});