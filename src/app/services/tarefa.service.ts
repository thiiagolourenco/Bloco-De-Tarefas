import { Injectable } from '@angular/core';
import { Tarefa } from 'src/modules/tarefa.module';

/*O @Injectable é um decorador que informa que a classe
 *participa do sistema de injeção de dependência. Ou seja, 
 *essa classe fornecerá um serviço. Esse decorador aceita 
 *um objeto de metadados para o serviço. */
@Injectable({
    providedIn: 'root'
})

/*Um serviço é uma forma de compartilhar informações 
 *entre classes que não se conhecem. Um componente deve 
 *se concentrar na apresentação de dados e delegar o acesso 
 *a esses dados a um serviço. No final das contas o componente 
 *só vai "pedir" os dados ao serviço, ou seja, vai "pedir" a
 *perstação dos serviços que ele necessita. Evita a duplicação de código.
 *Uma curiosidade é que podemos usar serviços em serviços e funciona da mesma maneira.
 *Porém você precisa se certificar que o @Injectable está com os metadados.
 *O export torna a classe pública.*/
export class TarefaService{
    public listaTarefas: Tarefa[] = [];
    public modo: string = "listT";
    
    carregarLista(listaTarefas: Tarefa[]){
        const dadosCarregados = localStorage.getItem('listaTarefas');
        
        if(dadosCarregados != null){
            listaTarefas = JSON.parse(dadosCarregados);
        }else{
            listaTarefas = [];
        }
            return listaTarefas;
    }

    alteraModo(newModo: string){
        this.modo = newModo;
    }

    salvarLista(listaTarefas: Tarefa[]){
        const dados = JSON.stringify(listaTarefas);
        localStorage.setItem('listaTarefas', dados);
    }
}