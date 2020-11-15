import { Request, Response } from "express";
import { Motorista } from "../model/Motorista/Motorista";
import { Motoristas } from "../model/Motorista/Motoristas";

const motoristas: Motoristas = new Motoristas();

export default {
  createMotorista(req: Request, res: Response) {
    const motorista: Motorista = new Motorista(req.body.nome);

    try {
      motoristas.adicionaMotorista(motorista);
      res.status(200).send("Motorista cadastrado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  updateMotorista(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);

      motoristas.atualizaMotorista(id, req.body.nome);

      res.status(200).json("Motorista atualizado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  listMotorista(req: Request, res: Response) {
    try {
      const drivers: Motorista[] = motoristas.listaMotoristas();
      res.status(200).json(drivers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  searchOneMotorista(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);

      let motorista: Motorista = motoristas.recuperaMotorista(id);
      res.status(200).json(motorista);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  deleteMotorista(req: Request, res: Response){

    const id: number = parseInt(req.params.id);

      try {
          motoristas.excluiMotorista(id);
          res.status(200).json("Motorista excluido com sucesso");
      } catch (error) {
          res.status(500).json(error.message);
      }
  }
};
