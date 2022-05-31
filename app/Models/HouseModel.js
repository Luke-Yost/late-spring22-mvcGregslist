import { generateId } from "../Utils/generateId.js"

export class House{
  constructor(houseData){
    this.year= houseData.value,
    this.levels= houseData.value,
    this.description = houseData.description 
    
    this.bedrooms = houseData.bedrooms 
    this.bathrooms = houseData.bathrooms 
   
    this.price = houseData.price
    this.imgUrl = houseData.imgUrl 
    this.id = houseData.id || generateId()
  }

  get Template(){
    return `
    <div class="col-6 col-md-4">
    <div class="bg-light rounded shadow p-2">
      <img class="img-fluid" src="${this.imgUrl}" alt="${this.description}">
      <h4 class="text-center">${this.description} | Price: ${this.price} </h4>
      <h5 class="text-center">Total Rooms: ${this.levels} | Sqr Fotage: ${this.year}</h5>
        <h5 class="text-center">Bedrooms: ${this.bedrooms}| Bathrooms: ${this.bathrooms}</h5>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
        <button class="btn btn-info" onclick="app.housesController.openUpdateForm('${this.id}')"><i class="mdi mdi-pen"></i></button>
    </div>
  </div>
    `
  }

}