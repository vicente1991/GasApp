import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {

  gasolist!: Gasolinera[];
  gasoListFull!: Gasolinera[];
  preciomin!: number;
  preciomax!: number;

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolinerasList().subscribe(resp=>{
      this.gasolist= resp.results;
      this.gasoListFull= resp.results;
    })
  }

  filtrarPorPrecio(preciomin: number,preciomax: number){
    this.gasolist = this.gasoListFull
    if(preciomin>0 && preciomax>preciomin){
      let gasolineras: Gasolinera[] = this.gasolist.filter(gasolineras => gasolineras.id)
      this.gasolist = gasolineras

    }else{
      this.gasolineraService.getGasolinerasList();
    }
  }

}
