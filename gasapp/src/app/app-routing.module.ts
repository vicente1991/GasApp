import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';

const routes: Routes = [
  { path:'gasolinera', component: GasolineraListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/gasolinera' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
