import { Router } from "express";
import { ConsultaController } from "../controller/Consulta/ConsultaController.js";

export const consultasRouter = Router();
const consultaController = new ConsultaController();

consultasRouter.get('/consultas', (req, res) => consultaController.getAll(req, res));
consultasRouter.get('/consultas/:id', (req, res) => consultaController.getById(req, res));
consultasRouter.post('/consultas', (req, res) => consultaController.create(req, res));
consultasRouter.put('/consultas/:id', (req, res) => consultaController.update(req, res));
consultasRouter.delete('/consultas/:id', (req, res) => consultaController.delete(req, res));