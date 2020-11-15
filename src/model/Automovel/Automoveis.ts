import { Automovel } from "./Automovel";

export class Automoveis {
  private automoveis: Automovel[] = [];

  adicionaAutomovel(automovel: Automovel): void {
    this.automoveis.forEach((veiculo: Automovel) => {
      if (veiculo.getPlaca == automovel.getPlaca) {
        throw new Error("Automovel já cadastrado com essa placa");
      }
    });

    this.automoveis.push(automovel);
  }

  listaAutomoveis(): Automovel[] {
    return ([] = this.automoveis);
  }

  filtraAutomoveis(cor: string, marca: string): Automovel[] {
    let encontrou: boolean = false;
    let cars: Automovel[] = [];

    if (cor === undefined) {
      this.automoveis.forEach((car: Automovel) => {
        if (car.getMarca === marca) {
          cars.push(car);
          encontrou = true;
        }
      });
    } else if (marca === undefined) {
      this.automoveis.forEach((car: Automovel) => {
        if (car.getCor === cor) {
          cars.push(car);
          encontrou = true;
        }
      });
    } else {
      let carsCollection: Automovel[] = [];

      this.automoveis.forEach((car: Automovel) => {
        if (car.getCor === cor) {
          carsCollection.push(car);
          encontrou = true;
        }
      });

      carsCollection.forEach((car: Automovel) => {
        if (car.getMarca === marca) {
          cars.push(car);
          encontrou = true;
        }
      });
    }

    if (!encontrou) {
      throw new Error("Automovel não encontrado");
    } else {
      return cars;
    }
  }

  recuperaAutomovel(placa: string): Automovel {
    let encontrou: boolean = false;
    let automovel: Automovel;

    this.automoveis.forEach((veiculo: Automovel) => {
      if (veiculo.getPlaca == placa) {
        encontrou = true;
        automovel = veiculo;
      }
    });

    if (!encontrou) {
      throw new Error("Automovel não encontrado");
    } else {
      return automovel;
    }
  }

  atualizaAutomovel(placa: string, automovel: Automovel): void {
    let index: number;
    this.automoveis.forEach((veiculo: Automovel) => {
      if (veiculo.getPlaca == placa) {
        index = this.automoveis.indexOf(veiculo);
        this.automoveis[index] = automovel;
      }
    });

    if (index == undefined) {
      throw new Error("Automovel não encontrado");
    }
  }

  removeAutomovel(placa: string): void {
    let removido: boolean = false;
    this.automoveis.forEach((veiculo: Automovel) => {
      if (veiculo.getPlaca == placa) {
        this.automoveis.splice(this.automoveis.indexOf(veiculo), 1);
        removido = true;
      }
    });

    if (!removido) {
      throw new Error("Automovel não encontrado");
    }
  }
}
