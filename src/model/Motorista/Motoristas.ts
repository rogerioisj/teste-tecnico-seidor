import { Motorista } from "./Motorista";

export class Motoristas {
  private motoristas: Motorista[] = [];

  listaMotoristas(): Motorista[] {
    return ([] = this.motoristas);
  }

  adicionaMotorista(motorista: Motorista): void {
    this.motoristas.push(motorista);
  }

  atualizaMotorista(id: number, nome: string): void {
    let alterou: boolean = false;
    this.motoristas.forEach((motorista: Motorista) => {
      if (motorista.getId === id) {
        motorista.setNome(nome);
        alterou = true;
      }
    });

    if (!alterou) {
      throw new Error("Motorista não encontrado");
    }
  }

  recuperaMotorista(id: number): Motorista {
    let encontrou: boolean = false;
    let motorista: Motorista;

    this.motoristas.forEach((driver: Motorista) => {
      if (driver.getId === id) {
        motorista = driver;
        encontrou = true;
      }
    });

    if (!encontrou) {
      throw new Error("Motorista não encontrado");
    } else {
      return motorista;
    }
  }

  filtraMotorista(nome: string): Motorista[] {
    let encontrou: boolean = false;
    let drivers: Motorista[] = [];

    this.motoristas.forEach((driver: Motorista) =>{
        if(driver.getNome === nome){
            drivers.push(driver);
            encontrou = true;
        }
    });

    if(!encontrou){
        throw new Error("Motorista não encontrado");
    } else{
        return drivers;
    }
  }

  excluiMotorista(id: number): void {
      let removido: boolean = false;

      this.motoristas.forEach((motorista: Motorista) =>{
          if(motorista.getId === id){
              this.motoristas.splice(this.motoristas.indexOf(motorista), 1);
              removido = true;
          }
      });

      if(!removido){
          throw new Error("Motorista não encontrado");
      }
  }
}
