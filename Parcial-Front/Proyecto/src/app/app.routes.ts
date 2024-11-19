import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.componente';
import { ListaComponente } from './components/lista/lista.component';



export const routes: Routes = [
    { path: 'lista', component: ListaComponente},
    { path: 'editar', component: EditarComponent},
    { path: '', redirectTo: '/lista', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
