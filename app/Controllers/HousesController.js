import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js"; 
import {housesService } from "../Services/HousesService.js"


function _drawHouses(){
  // get all the houses and build a template
  let houses = ProxyState.houses

  let template = ``

  houses.forEach(home => template += home.Template)
  // console.log(template);

  document.getElementById('listings').innerHTML = template
}

export class HousesController{
  constructor(){
    console.log('Houses controller loaded', ProxyState.houses);
    ProxyState.on( 'houses', _drawHouses)
    this.viewHouses()

  }

  viewHouses(){
    //  Get Car Form and inject into modal body
    let form = getHouseForm()
    document.getElementById('form-body').innerHTML = form
    _drawHouses()
  }

  createHouse(){
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);

    let houseData = {
      name : form.make.name,
      roomnumber : form.make.roomnumber,
      bedrooms : form.make.bedrooms,
      bathrooms : form.make.bathrooms,
      sqrfootage : form.make.sqrfootage,
      price : form.make.price,
      image : form.make.image,
      
    }
    console.log('newhouse', houseData);

    housesService.createHouse(houseData)
    form.reset() 

    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

}