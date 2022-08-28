export class Usuario {

  nombre!:string;
  clave!:string;



  ToString():string
  {
    return this.nombre +" " + this.clave;
  }
}
