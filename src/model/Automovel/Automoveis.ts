import { Automovel } from "./Automovel";

export  class Automoveis {
  private automoveis: Automovel[] = [];

  adicionaAutomovel(automovel: Automovel): void {

    this.automoveis.push(automovel);
    console.log(this.automoveis);
  }

  listaAutomoveis(): Automovel[]{
      return [] = this.automoveis;
  }
}
