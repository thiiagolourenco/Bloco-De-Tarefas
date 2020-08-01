import { Component } from '@angular/core';

import { Tarefa } from 'src/modules/tarefa.module';
import { ListaTarefasFComponent } from '../lista-tarefasF/lista-tarefasF.component';

@Component({
  selector: 'app-input-tarefaF',
  templateUrl: './input-tarefaF.component.html',
  styleUrls: ['./input-tarefaF.component.css']
})
export class InputTarefaFComponent extends ListaTarefasFComponent{

  limparInput(){
    this.form.reset();
  }

  botaoSalvar(){
    const title = this.form.controls['stringTarefa'].value;
    const id = this.tarefaService.listaTarefas.length + 1;
    this.tarefaService.listaTarefas.push(new Tarefa(id, title, false));
    this.tarefaService.salvarLista(this.tarefaService.listaTarefas);
    this.limparInput();
  }
}
