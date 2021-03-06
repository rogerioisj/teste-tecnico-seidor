export class Motorista {
  private id: number;

  public static contId: number = 1;

  generateId(): void {
    this.id = Motorista.contId;
    Motorista.contId++;
  }

  get getId(): number {
      return this.id;
  }

  get getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
      this.nome = nome;
  }

  constructor(private nome: string) {
    this.generateId();
  }
}
