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

      res.status(200).json("Carro adionado com sucesso");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  teste(req: Request, res: Response) {
    res.json("teste");
  },
};
