import { Router } from "express";
import { PacientesController } from "../controller/Pacientes/PacientesController.js";

export const pacientesRouter = Router();
const pacientesController = new PacientesController();

pacientesRouter.get('/pacientes', (req, res) => pacientesController.getAll(req, res));
pacientesRouter.get('/pacientes/:id', (req, res) => pacientesController.getById(req, res));
pacientesRouter.post('/pacientes', (req, res) => pacientesController.create(req, res));
pacientesRouter.put('/pacientes/:id', (req, res) => pacientesController.update(req, res));
pacientesRouter.delete('/pacientes/:id', (req, res) => pacientesController.delete(req, res));