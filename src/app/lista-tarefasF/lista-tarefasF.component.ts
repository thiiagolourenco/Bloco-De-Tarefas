//Import do pacote core do angular
import { Component } from '@angular/core';
import { Tarefa } from 'src/modules/tarefa.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TarefaService } from '../services/tarefa.service';

/*Selector: é a tag HTML;
 *TemplateUrl: é a estrutura HTML do componente;  
 *StyleUrls: é o estilo feito em CSS
 *O @Component é um declarador que fornece 
 *informações do componente. 
*/
@Component({
  selector: 'app-lista-tarefasF', //<app-lista-tarefas>...</app-lista-tarefas>
  templateUrl: './lista-tarefasF.component.html', //arquivo HTML.
  styleUrls: ['./lista-tarefasF.component.css'], // arquivo CSS.
  /*providers:[TarefaService] Podemos fazer a injeção do serviço em cada classe tb
   *ao invés de colocarmos tudo no AppModule.
   *Isso nos dá uma instância do serviço que esse componente precisa. 
   *(Chamamos isso de INJECTOR SERVICE).*/
})

/*Um componente é o conjunto de uma view, 
 *style e model de uma parte/pedaço da página web. 
 *Classe do componente, onde irá ficar métodos e 
 *a forma como o componente funciona.
 *O export pra classe ser pública.*/
export class ListaTarefasFComponent{

  public checkModeBox: string;
  public form: FormGroup;  

  constructor(private fb: FormBuilder, public tarefaService: TarefaService){
    this.createForm(fb);
    tarefaService.listaTarefas = tarefaService.carregarLista(tarefaService.listaTarefas);
  }
  
  /*ReactiveForms são formulários reativos. 
   *Eles nos permitem ter um controle maior 
   *sobre o o formulário da página. Esse tipo
   *de formulário é mais escalável, testável,
   *robusto e é mais fácil de ter reuso. 
   */
  createForm(fb: FormBuilder){
    this.form = fb.group({    
      stringTarefa: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  botaoConcluir(tarefa: Tarefa){
      tarefa.feita = true;
      this.tarefaService.salvarLista(this.tarefaService.listaTarefas);
      this.checkModeBox = "check";
      //this.botaoApagar(tarefa);
  }
  
  botaoApagar(tarefa: Tarefa){
    const indexTarefa: number = this.tarefaService.listaTarefas.indexOf(tarefa);
    
    if(indexTarefa != -1){ 
      this.tarefaService.listaTarefas.splice(indexTarefa, 1);
    }
    this.tarefaService.salvarLista(this.tarefaService.listaTarefas);
  }
}
