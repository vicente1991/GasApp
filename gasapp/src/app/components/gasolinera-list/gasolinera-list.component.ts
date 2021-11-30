import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio, Provincia } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {

  gasoList: ListaEESSPrecio[] = [];
  gasoListFull: ListaEESSPrecio[] = [];
  provinciasList!: Provincia[];
  provinciasSelected: String[] = [];
 
  preciomin!: number;
  preciomax!: number;

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolinerasList().subscribe(gasolineras => {
      this.gasoListFull = this.gasolineraService.parseAnyToGasolineraListResponse(JSON.stringify(gasolineras));
      this.gasoList = this.gasoListFull;
    })
    this.gasolineraService.getProvincias().subscribe(provincia => {
      this.provinciasList = provincia
      console.log(provincia);
    });


  }

  filterProvincias() {
    console.log(this.gasoList)
    this.gasoList = this.gasoListFull.filter(gas => this.provinciasSelected.includes(gas.idProvincia));
  }

  /* filtrarPorPrecio(preciomin: number,preciomax: number){
     this.gasolist = this.gasoListFull
     if(preciomin>0 && preciomax>preciomin){
       let gasolineras: Gasolinera[] = this.gasolist.filter(gasolineras => gasolineras.id)
       this.gasolist = gasolineras
 
     }else{
       this.gasolineraService.getGasolinerasList();
     }
   }*/

}
