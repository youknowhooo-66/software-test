import { prismaClient } from "../../prisma/prisma.js";

export class ConsultaController {
    async getAll(req, res) {
        try {
            const consultas = await prismaClient.consulta.findMany();
            return res.json(consultas);
        } catch (e) {
            console.log(e);
            res.status(500).send("Erro ao buscar consultas");
        }
    }

    async getById(req, res) {
        try {
            const consulta = await prismaClient.consulta.findUnique({
                where: { id: Number(req.params.id) }
            });
            if (!consulta) return res.status(404).send("Prontuario não existe!");
            return res.json(consulta);
        } catch (e) {
            console.log(e);
            res.status(500).send("Erro ao buscar consulta");
        }
    }

    async create(req, res) {
        try {
            const { body } = req;
            const bodyKeys = Object.keys(body);
            for (const key of bodyKeys) {
                if (
                    key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes");
            }
            const consulta = await prismaClient.consulta.create({
                data: {
                    ...body,
                    data_consulta: new Date(body.data_consulta)
                },
            });
            return res.status(201).json(consulta);
        } catch (error) {
            console.error(error);
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!");
            } else {
                res.status(500).send("Erro ao cadastrar consulta");
            }
        }
    }

    async update(req, res) {
        try {
            const { body, params } = req;
            const bodyKeys = Object.keys(body);
            for (const key of bodyKeys) {
                if (
                    key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes");
            }
            await prismaClient.consulta.update({
                where: { id: Number(params.id) },
                data: { ...body },
            });
            const prontuarioAtualizado = await prismaClient.consulta.findUnique({
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
                res.status(500).send("Erro ao atualizar consulta");
            }
        }
    }

    async delete(req, res) {
        try {
            const consultaDeletado = await prismaClient.consulta.delete({
                where: { id: Number(req.params.id) },
            });
            res.status(200).json({
                message: "Exame deletado!",
                data: consultaDeletado
            });
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco");
            } else {
                res.status(500).send("Erro ao deletar consulta");
            }
        }
    }
}