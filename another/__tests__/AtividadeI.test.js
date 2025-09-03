import { numeroNegativo } from "../__tests__/AtividadeI";

test('Deve retornar "é negativo" para número negativo', () => {
    expect(numeroNegativo(-5)).toBe("é negativo");
});
test('Não deve retornar nada para número positivo', () => {
    expect(numeroNegativo(3)).toBe(false);
});
test('Não deve retornar nada para zero', () => {
    expect(numeroNegativo(0)).toBe("zero não é positivo nem negativo");
});
