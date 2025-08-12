import { Atividade } from "../src/Atividade";

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 2, que seria '7'", () => {
        expect(Atividade(2)).toBe(7)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 1, que seria '2'", () => {
        expect(Atividade(1)).toBe(2)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 0, que seria '9'", () => {
        expect(Atividade(0)).toBe(9)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 3, que seria '1'", () => {
        expect(Atividade(3)).toBe(1)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 4, que seria '8'", () => {
        expect(Atividade(4)).toBe(8)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 5, que seria '5'", () => {
        expect(Atividade(5)).toBe(5)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 6, que seria '6'", () => {
        expect(Atividade(6)).toBe(6)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 7, que seria '4'", () => {
        expect(Atividade(7)).toBe(4)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 8, que seria '0'", () => {
        expect(Atividade(8)).toBe(0)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar o array na posição 9, que seria '3'", () => {
        expect(Atividade(9)).toBe(3)
    })
})

describe("Consulta de array", () => {
    test("Deve retornar um erro, o que estaría indefinido", () => {
        expect(Atividade(10)).toBe("O aray em questão está limitado até ao nono índice")
    })
})

describe("Consulta de array", () => {
    test("Deve retornar um erro, o que estaría indefinido", () => {
        expect(Atividade(-1)).toBe("O aray em questão está limitado apenas a números inteiros positivos partindo do 0")
    })
})

describe("Consulta de array", () => {
    test("Deve retornar um erro, o que estaría indefinido", () => {
        expect(Atividade([])).toBe("Erro")
    })
})

describe("Consulta de array", () => {
    test("Deve retornar um erro, o que estaría indefinido", () => {
        expect(Atividade(['String'])).toBe("Erro")
    })
})

describe("Consulta de array", () => {
    test("Deve retornar um erro, o que estaría indefinido", () => {
        expect(Atividade()).toBe("Erro")
    })
})


