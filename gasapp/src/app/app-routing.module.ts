import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraFavComponent } from './components/gasolinera-fav/gasolinera-fav.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { ListasComponent } from './components/listas/listas.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'fav', pathMatch: 'full', component: GasolineraFavComponent },
  { path:'gasolinera', component: GasolineraListComponent },
  { path: 'listas', pathMatch: 'full', component: ListasComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
