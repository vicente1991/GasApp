import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraFavComponent } from './components/gasolinera-fav/gasolinera-fav.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'fav', pathMatch: 'full', component: GasolineraFavComponent },
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path:'gasolinera', component: GasolineraListComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
