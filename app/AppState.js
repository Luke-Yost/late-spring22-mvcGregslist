import { Car } from "./Models/Car.js"
import { House } from "./Models/HouseModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */

  
  cars = [
    new Car({make: 'Chevrolet', model: 'Impala', description:'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg'}),
    new Car({make: 'Buick', model: 'Grand National', description: 'It is grand', price:15, year: 1984, color:'#ff0000', imgUrl:'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg'})
  ]

  /** @type {import('./Models/HouseModel').House[]} */
  houses = [
    // new House({name: 'hammock',roomnumber: 0,bedrooms: 0.5, bathrooms: 0, sqrfootage: 5, price: 50, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RWyxt_DMeGWmwgZ0h7fFLwHaHa%26pid%3DApi&f=1'}), 
    // new House({name: 'shed',roomnumber: 1,bedrooms: 1, bathrooms: 0, sqrfootage:40, price: 250, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.S5rIAbV1sni1LSFNPvJjiAHaFj%26pid%3DApi&f=1'} ), 
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
