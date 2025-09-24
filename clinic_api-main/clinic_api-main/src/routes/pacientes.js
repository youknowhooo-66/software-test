import { Router } from "express";
import { pacientesController } from "../controller/Pacientes/PacientesController.js"

export const pacientesRouter = Router()

pacientesRouter.get("/pacientes", pacientesController.pegarTodosPacientes)
pacientesRouter.get("/pacientes/:id", pacientesController.pegarPacientesPorId)
pacientesRouter.post("/pacientes", pacientesController.criarPacientes)
pacientesRouter.put("/pacientes/:id", pacientesController.atualizarPacientes)
pacientesRouter.delete("/pacientes/:id", pacientesController.deletePacientes)