import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"

class HousesService{
  createHouse(newHouse){
    let house = new House(newHouse)
    ProxyState.houses = [...ProxyState.houses, house]
  }
  deleteHouse(id){
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)

  }
}
export const housesService = new HousesService()