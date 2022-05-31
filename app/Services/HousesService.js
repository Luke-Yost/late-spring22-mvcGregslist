import { ProxyState } from "../AppState.js";
import { House } from "../Models/HouseModel.js";

class HousesService {
  async updateHouse(houseData, id) {
    // throw new Error("Method not implemented.");
    const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/houses/', + id, houseData)
    console.log('opdootinHoos', res.data);
    let houseIndex = ProxyState.houses.findIndex(hoos => hoos.id ==id)
    ProxyState.houses.splice(houseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }

  async getHouses(){
    const response = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
    console.log('gthoos', response.data);
    ProxyState.houses = response.data.map(house => new House(house))
  }
  async createHouse(houseData){
    console.log('service', houseData);
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/houses', houseData)
    console.log('makhoos', res.data);
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    // ProxyState.houses = [...ProxyState.houses, new House(houseData)]
    // console.log(ProxyState.houses);
  }

  async deleteHouse(id){
    // ProxyState.houses = ProxyState.houses.filter(home => home.id != id)

    const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/houses' + id)
    console.log('unmakhoos', res.data);
    ProxyState.houses = ProxyState.houses.filter(hoos => hoos.id != id)
    ProxyState.houses = ProxyState.houses

  }

}

export const housesService = new HousesService()