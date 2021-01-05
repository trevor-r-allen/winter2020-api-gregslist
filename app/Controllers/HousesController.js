import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"


function __drawHouses(){
  console.log("Draw Houses")
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {template += house.Template})
  document.getElementById('houses').innerHTML = template
}

export default class HousesController{
  constructor(){
    console.log("Houses Controller Constructor")
    ProxyState.on("houses", __drawHouses)
    __drawHouses()
  }

  createHouse(){
    window.event.preventDefault()
    console.log("Houses Controller Create Houses Function")
    let form = window.event.target
    let newHouse = {
      bedrooms: form["bedrooms"].value,
      bathrooms: form["bathrooms"].value,
      levels: form["levels"].value,
      imgUrl: form["imgUrl"].value,
      year: form["year"].value,
      price: form["price"].value,
      description: form["description"].value,
    }
    housesService.createHouse(newHouse)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide')
  }

  deleteHouse(id){
    console.log("Houses Controller Delete Houses Function")
    housesService.deleteHouse(id)
  }
}