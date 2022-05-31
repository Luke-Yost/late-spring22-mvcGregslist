import { ProxyState } from "../AppState.js";
import { House } from "../Models/HouseModel.js";

class HousesService {

  async createHouse(houseData){
    console.log('service', houseData);
    const res = await axios.
    ProxyState.houses = [...ProxyState.houses, new House(houseData)]
    console.log(ProxyState.houses);
  }

  deleteHouse(id){
    ProxyState.houses = ProxyState.houses.filter(home => home.id != id)
    ProxyState.houses = ProxyState.houses
  }

}

export const housesService = new HousesService()