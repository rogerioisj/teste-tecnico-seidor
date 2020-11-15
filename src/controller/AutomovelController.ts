import { Request, Response } from "express";
import { Automoveis } from "../model/Automovel/Automoveis";
import { Automovel } from "../model/Automovel/Automovel";

const automoveis = new Automoveis();

export default {
  async createAutomovel(req: Request, res: Response) {
    const placa: string = await req.body.placa;
    const cor: string = await req.body.cor;
    const marca: string = await req.body.marca;

    const automovel = new Automovel(placa, cor, marca);

    try {
      automoveis.adicionaAutomovel(automovel);

      res.status(200).json("Automovel adicionado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  listAutomoveis(req: Request, res: Response) {
    try {
      const collection: Automovel[] = automoveis.listaAutomoveis();

      res.status(200).json(collection);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

   updateAutomovel(req: Request, res: Response) {
    const automovel = new Automovel(req.params.placa, req.body.cor, req.body.marca);

    const placa: string =  req.params.placa;

    try {
      automoveis.atualizaAutomovel(placa, automovel);

      res.status(200).json("Automovel atualizado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
    
  }

};
