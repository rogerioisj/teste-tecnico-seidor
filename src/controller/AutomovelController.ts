import { Request, Response } from "express";
import { Automoveis } from "../model/Automovel/Automoveis";
import { Automovel } from "../model/Automovel/Automovel";

const automoveis = new Automoveis();

export default {
  async createAutomovel(req: Request, res: Response) {
    const automovel = new Automovel(
      req.body.placa,
      req.body.cor,
      req.body.marca
    );

    try {
      automoveis.adicionaAutomovel(automovel);

      res.status(200).json("Automovel adicionado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  listAutomoveis(req: Request, res: Response) {
    if(req.body.cor === undefined && req.body.marca === undefined) {
      try {
        const collection: Automovel[] = automoveis.listaAutomoveis();
  
        res.status(200).json(collection);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else{
      try {
        const anotherCollection: Automovel[] = automoveis.filtraAutomoveis(req.body.cor, req.body.marca);
  
        res.status(200).json(anotherCollection);
      } catch (error) {
        res.status(500).json(error.message);
      }
    }
  },

  searchOneAutomovel(req: Request, res: Response) {
    try {
      let automovel = automoveis.recuperaAutomovel(req.params.placa);

      res.status(200).json(automovel);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  updateAutomovel(req: Request, res: Response) {
    const automovel = new Automovel(
      req.body.placa,
      req.body.cor,
      req.body.marca
    );

    const placa: string = req.params.placa;

    try {
      automoveis.atualizaAutomovel(placa, automovel);

      res.status(200).json("Automovel atualizado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  deleteAutomovel(req: Request, res: Response) {
    const placa: string = req.params.placa;
    try {
      automoveis.removeAutomovel(placa);

      res.status(200).json("Automovel removido com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
