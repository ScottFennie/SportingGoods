import { generateId } from "../Utils/generateId.js"

export class Ski {
    constructor(skiData) {
        this.brand = skiData.brand
        this.size = skiData.size
        this.pole = skiData.pole
        this.color = skiData.color
        this.img = skiData.img
        this.price = skiData.price
        this.id = skiData.id || generateId()

    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-lg-2 d-flex justify-content-center">
        <div class=" my-2 card rounded text-center" style="width: 18rem;">
            <img src="${this.img}" class="rounded skis-img image-fluid card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.brand}</h5>
                <p class="card-text">$ ${this.price}</p>
                <button type='btn' class="btn btn-primary" onclick="app.skisController.buyItem()">Buy Item</button>
            </div>
        </div>
    </div>
        `

    }
}