import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { DialogGasolineraComponent } from '../dialog-gasolinera/dialog-gasolinera.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolinera!: ListaEESSPrecio;
  gasolineraList!: ListaEESSPrecio[];
  constructor(private gasolineraService: GasolineraService,private dialog: MatDialog) { }

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


}
