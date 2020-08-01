import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaTarefasFComponent } from './lista-tarefasF/lista-tarefasF.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from './services/tarefa.service';
import { HeaderComponent } from './header/header.component';
import { InputTarefaFComponent } from './input-tarefaF/input-tarefaF.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

/*Crição do módulo. @NgModule é um decorador 
 *que fornece informações a mais pro item. Nesse caso:
 *Declarations-> são os componentes que estão nesse módulo. 
 *Imports-> coloco os extras que eu vou usar.
 *Providers -> é tudo que a gente vi fornecer pros componentes, como serviços por exemplo. 
 *Bootstrap -> é o componente que vai inializar a aplicação.
 */ 

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasFComponent,
    HeaderComponent,
    InputTarefaFComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})

//Classe do modulo. Como é export ela é pública.
export class AppModule{
}
