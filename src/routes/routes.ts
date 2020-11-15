import { Router } from 'express';
import AutomovelController from '../controller/AutomovelController';

const router = Router();

router.post('/carro', AutomovelController.createAutomovel);

router.get('/carro', AutomovelController.listAutomoveis);

router.put('/carro/:placa', AutomovelController.updateAutomovel);

router.delete('/carro/:placa', AutomovelController.deleteAutomovel);

export default router;