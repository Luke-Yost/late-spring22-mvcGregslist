export class House{
  constructor(name = '', roomNumber = 0, bedrooms = 0, bathrooms = 0, sqrFootage = 0, price = 100, image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jX1oTKpzOJZqQp9PMrraLwHaFt%26pid%3DApi&f=1'){
    this.name = name 
    this.roomNumber = roomNumber
    this.bedrooms = bedrooms 
    this.bathrooms = bathrooms 
    this.sqrFootage = sqrFootage 
    this.price = price
    this.image = image 
  }

  get Template(){
    return `
    <div class="col-6 col-md-4">
    <div class="bg-light rounded shadow p-2">
      <img class="img-fluid" src="${this.image}" alt="${this.name}">
      <h4 class="text-center">${this.name} | Price: ${this.price} </h4>
      <h5 class="text-center">Total Rooms: ${this.roomNumber} | Sqr Fotage: ${this.sqrFootage}</h5>
        <h5 class="text-center">Bedrooms: ${this.bedrooms}| Bathrooms: ${this.bathrooms}</h5>
      <p>description</p>
    </div>
  </div>
    `
  }

}