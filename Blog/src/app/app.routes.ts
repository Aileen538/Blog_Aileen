import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { BlogPostComponent } from './component/blog-post/blog-post.component';
import { FormularioComponent } from './component/formulario/formulario.component';

export const routes: Routes = [
{path: '',redirectTo:'/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'new', component: FormularioComponent},
    {path:':postId',component:BlogPostComponent},
];
