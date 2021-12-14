import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';

export interface gasoDetail{
  gasolinera: ListaEESSPrecio;
}

@Component({
  selector: 'app-dialog-gasolinera',
  templateUrl: './dialog-gasolinera.component.html',
  styleUrls: ['./dialog-gasolinera.component.css']
})
export class DialogGasolineraComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: gasoDetail,private firestore: AngularFirestore) { }

  gasolinera!: ListaEESSPrecio;
  newLista!: string;

  ngOnInit(): void {
    this.gasolinera = this.data.gasolinera;
  }

  

}
