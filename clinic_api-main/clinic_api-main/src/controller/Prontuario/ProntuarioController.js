import { prismaClient } from "../../prisma/prisma.js";

export class ProntuarioController {
    async getAll(req, res) {
        try {
            const prontuarios = await prismaClient.prontuario.findMany();
            return res.json(prontuarios);
        } catch (e) {
            console.log(e);
            res.status(500).send("Erro ao buscar prontuarios");
        }
    }

    async getById(req, res) {
        try {
            const prontuario = await prismaClient.prontuario.findUnique({
                where: { id: Number(req.params.id) }
            });
            if (!prontuario) return res.status(404).send("Prontuario não existe!");
            return res.json(prontuario);
        } catch (e) {
            console.log(e);
            res.status(500).send("Erro ao buscar prontuario");
        }
    }

    async create(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body);
            for (const key of bodyKeys) {
                if (
                    key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes");
            }
            const prontuario = await prismaClient.prontuario.create({
                data: {
                    ...body,
                    data: new Date(body.data)
                },
            });
            return res.status(201).json(prontuario);
        } catch (error) {
            console.error(error);
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!");
            } else {
                res.status(500).send("Erro ao cadastrar prontuario");
            }
        }
    }

    async update(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body);
            for (const key of bodyKeys) {
                if (
                    key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes");
            }
            await prismaClient.prontuario.update({
                where: { id: Number(params.id) },
                data: { ...body },
            });
            const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
                where: { id: Number(params.id) }
            });
            return res.status(201).json({
                message: "Prontuario atualizado!",
                data: prontuarioAtualizado
            });
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco");
            } else if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!");
            } else {
                res.status(500).send("Erro ao atualizar prontuario");
            }
        }
    }

    async delete(req, res) {
        try {
            const prontuarioDeletado = await prismaClient.prontuario.delete({
                where: { id: Number(req.params.id) },
            });
            res.status(200).json({
                message: "Prontuario deletado!",
                data: prontuarioDeletado
            });
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco");
            } else {
                res.status(500).send("Erro ao deletar prontuario");
            }
        }
    }
}