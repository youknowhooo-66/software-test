import { verificarIdade } from "../src/verificarIdade";

describe('funcao de verificação de idade', () => {
    test('Espero que seja maior de idade', () => {
        expect(verificarIdade(18)).toBe("Você é maior de idade")
    });
    test('Espero que não seja maior de idade', () => {
        expect(verificarIdade(17)).toBe("Você é menor de idade")
    });
});