import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './component/lista-post/lista-post.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
   { path: 'posts', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   
  
})
export class AppRoutingModule { }
export class AppModule { }

