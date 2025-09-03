import { numeroPositivo } from "../__tests__/AtividadeII";

test('Deve retornar "é positivo" para número positivo', () => {
    expect(numeroPositivo(5)).toBe("é positivo");
});
test('Não deve retornar nada para número negativo', () => {
    expect(numeroPositivo(-3)).toBe(false);
});
test('Não deve retornar nada para zero', () => {
    expect(numeroPositivo(0)).toBe("zero não é positivo nem negativo");
});