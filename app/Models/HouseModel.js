import { generateId } from "../Utils/generateId.js"

export class House{
  constructor(houseData){
    this.name = houseData.name 
    this.roomnumber = houseData.roomnumber
    this.bedrooms = houseData.bedrooms 
    this.bathrooms = houseData.bathrooms 
    this.sqrfootage = houseData.sqrfootage 
    this.price = houseData.price
    this.image = houseData.image 
    this.id = generateId()
  }

  get Template(){
    return `
    <div class="col-6 col-md-4">
    <div class="bg-light rounded shadow p-2">
      <img class="img-fluid" src="${this.image}" alt="${this.name}">
      <h4 class="text-center">${this.name} | Price: ${this.price} </h4>
      <h5 class="text-center">Total Rooms: ${this.roomnumber} | Sqr Fotage: ${this.sqrfootage}</h5>
        <h5 class="text-center">Bedrooms: ${this.bedrooms}| Bathrooms: ${this.bathrooms}</h5>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }

}