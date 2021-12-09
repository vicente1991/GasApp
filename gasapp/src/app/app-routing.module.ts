import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', redirectTo: '/login' },
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path:'gasolinera', component: GasolineraListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
