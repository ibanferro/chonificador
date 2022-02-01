import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChonificadorComponent } from './chonificador/chonificador.component';

const routes: Routes = [
  
  { path: '', component: ChonificadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
