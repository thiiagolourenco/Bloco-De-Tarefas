//Tipo tarefa.
export class Tarefa{
    public id: number;
    public stringTarefa: string;
    public feita: boolean;

    constructor(id: number, stringTarefa: string, feita: boolean){
        this.id = id;
        this.stringTarefa = stringTarefa;
        this.feita = feita;
    }
}