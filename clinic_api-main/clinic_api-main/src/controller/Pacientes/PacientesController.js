import { prismaClient } from "../../prisma/prisma.js";

export class PacientesController {
    async getAll(req, res) {
        try {
            const pacientes = await prismaClient.paciente.findMany();
            return res.json(pacientes);
        } catch (e) {
            console.log(e);
            res.status(500).send("Erro ao buscar pacientes");
        }
    }

    async getById(req, res) {
        try {
            const paciente = await prismaClient.paciente.findUnique({
                where: { id: Number(req.params.id) }
            });
            if (!paciente) return res.status(404).send("Paciente não existe!");
            return res.json(paciente);
        } catch (e) {
            console.log(e);
            res.status(500).send("Erro ao buscar paciente");
        }
    }

    async create(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body);
            for (const key of bodyKeys) {
                if (
                    key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes");
            }
            const paciente = await prismaClient.paciente.create({
                data: {
                    ...body,
                    data_nascimento: new Date(body.data_nascimento),
                },
            });
            return res.status(201).json(paciente);
        } catch (error) {
            console.error(error);
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!");
            } else {
                res.status(500).send("Erro ao cadastrar paciente");
            }
        }
    }

    async update(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body);
            for (const key of bodyKeys) {
                if (
                    key !== "nome" &&
                    key !== "cpf" &&
                    key !== "telefone" &&
                    key !== "email" &&
                    key !== "data_nascimento" &&
                    key !== "sexo" &&
                    key !== "responsavel"
                ) return res.status(404).send("Colunas não existentes");
            }
            await prismaClient.paciente.update({
                where: { id: Number(params.id) },
                data: { ...body },
            });
            const pacienteAtualizado = await prismaClient.paciente.findUnique({
                where: { id: Number(params.id) }
            });
            return res.status(201).json({
                message: "Paciente atualizado!",
                data: pacienteAtualizado
            });
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco");
            } else if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!");
            } else {
                res.status(500).send("Erro ao atualizar paciente");
            }
        }
    }

    async delete(req, res) {
        try {
            const pacienteDeletado = await prismaClient.paciente.delete({
                where: { id: Number(req.params.id) },
            });
            res.status(200).json({
                message: "Paciente deletado!",
                data: pacienteDeletado
            });
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco");
            } else if (error.code == "P2003") {
                res.status(404).send("Paciente não pode ser excluido, pois possui exames vinculados.");
            } else {
                res.status(500).send(error);
            }
        }
    }
}