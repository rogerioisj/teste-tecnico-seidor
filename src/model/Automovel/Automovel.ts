export class Automovel {
  //Devido a um recurso do TypeScript, as variáveis podem ser declaradas no próprio construtor
  constructor(
    private placa: string,
    private cor: string,
    private marca: string
  ) {}
}
