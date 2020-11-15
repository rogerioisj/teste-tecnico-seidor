export class Motorista {
  private id: number;

  public static contId: number = 1;

  generateId(): void {
      this.id = Motorista.contId;
      Motorista.contId++;
  }

  constructor(private nome: string) {
      this.generateId();
  }
}
