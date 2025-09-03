import { Router } from "express";
import { ProntuarioController } from "../controller/Prontuario/ProntuarioController.js";

export const prontuarioRouter = Router();
const prontuarioController = new ProntuarioController();

prontuarioRouter.get('/prontuarios', (req, res) => prontuarioController.getAll(req, res));
prontuarioRouter.get('/prontuarios/:id', (req, res) => prontuarioController.getById(req, res));
prontuarioRouter.post('/prontuarios', (req, res) => prontuarioController.create(req, res));
prontuarioRouter.put('/prontuarios/:id', (req, res) => prontuarioController.update(req, res));
prontuarioRouter.delete('/prontuarios/:id', (req, res) => prontuarioController.delete(req, res));