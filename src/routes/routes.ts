import { Router } from "express";
import AutomovelController from "../controller/AutomovelController";
import MotoristaController from "../controller/MotoristaController";

const router = Router();

//Rotas para automoveis

router.post("/carro", AutomovelController.createAutomovel);

router.get("/carro", AutomovelController.listAutomoveis);

router.put("/carro/:placa", AutomovelController.updateAutomovel);

router.delete("/carro/:placa", AutomovelController.deleteAutomovel);

router.get("/carro/:placa", AutomovelController.searchOneAutomovel);

//Rotas para Motoristas

router.post("/motorista", MotoristaController.createMotorista);

router.put("/motorista/:id", MotoristaController.updateMotorista);

router.get("/motorista", MotoristaController.listMotorista);

router.get("/motorista/:id", MotoristaController.searchOneMotorista);

router.delete("/motorista/:id", MotoristaController.deleteMotorista);

export default router;
