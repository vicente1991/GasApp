import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio, Municipios, Provincia } from 'src/app/interfaces/gasolinera.interface';
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
  provinciasSelected: string[] = [];
  preciomin!: number;
  preciomax!: number;
  tipoGasolina!: string; 
  municipio!: string;
  municipioList!: Municipios[];
  mostrar: boolean = false;



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
    this.gasoList = this.gasoListFull.filter(gas => this.provinciasSelected.includes(gas.idProvincia));
    this.getMunicipiosById();
  }

  filtrarPrecios(){
    this.gasoList = this.gasoListFull
    if(this.tipoGasolina.includes('precioGasoleoA')){
      let gasolineraPrecios: ListaEESSPrecio[] = this.gasoList.filter(provincia => this.preciomin < Number.parseFloat(provincia.precioGasoleoA.replace(',','.')) && this.preciomax > Number.parseFloat(provincia.precioGasoleoA.replace(',','.')))
      this.gasoList = gasolineraPrecios;  
    }
    if(this.tipoGasolina.includes('precioGasolina95E5')){
      let gasolineraPrecios: ListaEESSPrecio[] = this.gasoList.filter(provincia => this.preciomin < Number.parseFloat(provincia.precioGasolina95E5.replace(',','.')) && this.preciomax > Number.parseFloat(provincia.precioGasolina95E5.replace(',','.')))
      this.gasoList = gasolineraPrecios;  
    }
    if(this.tipoGasolina.includes('precioGasolina98E5')){
        let gasolineraPrecios: ListaEESSPrecio[] = this.gasoList.filter(provincia => this.preciomin < Number.parseFloat(provincia.precioGasolina98E5.replace(',','.')) && this.preciomax > Number.parseFloat(provincia.precioGasolina98E5.replace(',','.')))
        this.gasoList = gasolineraPrecios;  
      }
  }
  getMunicipiosById(){
    this.mostrar = true
    this.gasolineraService.getMunicipios(this.provinciasSelected).subscribe(municipios => {
      this.municipioList = municipios
      console.log(municipios)
    })
  }
  filterMunicipio(){
    this.gasoList = this.gasoListFull
    this.gasoList = this.gasoList.filter(gas => this.municipio == gas.municipio)
  }

}
