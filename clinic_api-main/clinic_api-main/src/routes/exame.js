import { Router } from "express";
import { ExameController } from "../controller/Exame/ExameController.js";

export const exameRouter = Router();
const exameController = new ExameController();

exameRouter.get('/exames', (req, res) => exameController.getAll(req, res));
exameRouter.get('/exames/:id', (req, res) => exameController.getById(req, res));
exameRouter.post('/exames', (req, res) => exameController.create(req, res));
exameRouter.put('/exames/:id', (req, res) => exameController.update(req, res));
exameRouter.delete('/exames/:id', (req, res) => exameController.delete(req, res));