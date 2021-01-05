import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService{
  async getHouses(){
    let res = await api.get("houses")
    console.log(res.data)
    ProxyState.houses = res.data.map(h => new House(h))
  }
  async createHouse(newHouse){
    let house = await api.post("houses", newHouse)
    console.log(house)
    ProxyState.houses = [...ProxyState.houses, new House(house.data)]
  }
  async deleteHouse(id){
    let res = await api.delete("houses/"+id)
    console.log(res)
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)

  }
}
export const housesService = new HousesService()