export interface GasolineraResponse {
  Fecha: string
  results: Gasolinera[]
  Nota: string
  ResultadoConsulta: string
}

export interface Gasolinera {
  cP: string
  dirrecion: string
  horario: string
  municipio: string
  precioGasoleoA: string
  precioGasolina95E5: string
  precioGasolina98E5: string
  Provincia: string
  rotulo: string
  id: string
  idMunicipio: string
  idProvincia: string
  idCCAA: string
}