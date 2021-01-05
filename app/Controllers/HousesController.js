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
    ProxyState.on("houses", __drawHouses)
    __drawHouses()
    this.getHouses()
  }
  getHouses(){
    try{
      housesService.getHouses()
    }
    catch(error){
      console.error(error)
    }
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
    try{
      housesService.createHouse(newHouse)
    }
    catch(error){
      console.error(error)
    }
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide')
  }

  deleteHouse(id){
    try{
      housesService.deleteHouse(id)
    }
    catch(error){
      console.error(error)
    }  
  }
  bid(id, price){
    try{
      housesService.bid(id, price)
    }
    catch(error){
      console.error(error);
    }
  }
}