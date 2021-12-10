import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { GasolineraFav, ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { DialogGasolineraComponent } from '../dialog-gasolinera/dialog-gasolinera.component';
import { GasolineraListComponent } from '../gasolinera-list/gasolinera-list.component';


const COLLECTION_GAS = 'favoritos';
@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolinera!: ListaEESSPrecio;
  gasolineraList!: ListaEESSPrecio[];
  constructor(private gasolineraService: GasolineraService,private dialog: MatDialog,private firestore: AngularFirestore,private googleauth: GasolineraListComponent) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogGasolineraComponent,{
      width: "500px",
      height: "500px",
      data:{
        gasolinera: this.gasolinera
      }
    })
  }
  getGoogleMaps(direccion:String){
    this.gasolineraService.getGoogleMaps(direccion.replace(' ', '+'));
  }

  addFavorite(gasolinera: ListaEESSPrecio){

    if(localStorage.getItem('uid') == null){
      this.googleauth.googleAuth();
    }else{
      this.firestore.collection(COLLECTION_GAS).doc(gasolinera.ideess).set(
        {name: gasolinera.direccion,
        poblacion: gasolinera.municipio,
        provincia: gasolinera.provincia,
        id: gasolinera.ideess}
      )
    }
  }

  

}
