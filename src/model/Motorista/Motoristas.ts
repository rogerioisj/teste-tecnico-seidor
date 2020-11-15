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
}
