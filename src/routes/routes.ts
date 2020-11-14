import { Router } from 'express';
import AutomovelController from '../controller/AutomovelController';

const router = Router();

router.post('/carro', AutomovelController.createAutomovel);

router.get('/teste', AutomovelController.teste);

export default router;