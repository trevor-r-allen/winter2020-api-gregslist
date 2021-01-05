export default class House{
  constructor({bedrooms, bathrooms, levels, imgUrl, year, price, description, id}){
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description
    this.id = id
  }
  get Template() {
    return /*html*/`
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="https://place-hold.it/200x200">
        <div class="card-body">
            <h4 class="card-title">${this.bedrooms} Bed - ${this.bathrooms} Bath - ${this.levels} Levels - Built in ${this.year}</h4>
            <p class="card-text">${this.description}</p>
            <p class="card-text">$${this.price}</p>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}