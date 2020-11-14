export class Automovel{

    private id: number;

    private placa: string;

    private cor: string;

    private marca: string;

    private geradorDeIndentificação(): void{
        let contador: number;

        this.id = contador ++;
    }

    constructor(automovel: Automovel){
        if(automovel){
            this.geradorDeIndentificação();
            this.placa = automovel.placa;
            this.cor = automovel.cor;
            this.marca = automovel.marca;
        }
    }
}