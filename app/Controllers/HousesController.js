import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js"; 
import {housesService } from "../Services/HousesService.js"


function _drawHouses(){
  // get all the houses and build a template
  let houses = ProxyState.houses

  let template = ``

  houses.forEach(home => { template += home.Template})
  // console.log(template);

  document.getElementById('listings').innerHTML = template
}

export class HousesController{
  constructor(){
    console.log('Houses controller loaded', ProxyState.houses);
    ProxyState.on( 'houses', _drawHouses)
    this.getHouses()
    this.viewHouses()

  }

  viewHouses(){
    //  Get Car Form and inject into modal body
    let form = getHouseForm()
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  async getHouses(){
    await housesService.getHouses()
  }

  async createHouse(){
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);

    let houseData = {
      year: form.year.value,
      levels: form.levels.value,
      description: form.name.value,
      
      bedrooms : form.bedrooms.value,
      bathrooms : form.bathrooms.value,
    
      price : form.price.value,
      imgUrl : form.image.value,
      
    }
    console.log('newhouse', houseData);

    housesService.createHouse(houseData)
    form.reset() 

    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  async updateHouse(id){
    window.event.preventDefault()
    console.log('hoosdateopdate', id);
    let form = window.event.target
    let houseData = {
      year: form.year.value,
      levels: form.levels.value,
      description: form.name.value,
      
      bedrooms : form.bedrooms.value,
      bathrooms : form.bathrooms.value,
    
      price : form.price.value,
      imgUrl : form.image.value,
      
      
    }
      await housesService.updateHouse(houseData, id)
  }

  deleteHouse(id){
    console.log('delete house', id);
    housesService.deleteHouse(id)
  }

}