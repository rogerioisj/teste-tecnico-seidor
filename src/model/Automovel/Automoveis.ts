import { Automovel } from "./Automovel";

export class Automoveis {
  private automoveis: Automovel[] = [];

  adicionaAutomovel(automovel: Automovel): void {
    this.automoveis.push(automovel);
  }

  listaAutomoveis(): Automovel[] {
    return ([] = this.automoveis);
  }

  atualizaAutomovel(placa: string, automovel: Automovel): void {
    let index: number;
    this.automoveis.forEach((veiculo) => {
      if (veiculo.getPlaca == placa) {
        index = this.automoveis.indexOf(veiculo);
        this.automoveis[index] = automovel;
      }
    });

    if (index == undefined) {
      throw new Error("Automovel não encontrado");
    }
  }
}
