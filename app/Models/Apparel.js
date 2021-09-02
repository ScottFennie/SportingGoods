import { generateId } from "../Utils/generateId.js"

export class Apparel {

    constructor(apparelData) {
        this.brand = apparelData.brand
        this.size = apparelData.size
        this.color = apparelData.color
        this.img = apparelData.img
        this.description = apparelData.description
        this.price = apparelData.price
        this.id = apparelData.id || generateId()

    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-lg-2 d-flex justify-content-center">
        <div class=" my-2 card rounded text-center" style="width: 18rem;">
            <img src="${this.img}" class="rounded skis-img image-fluid card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.brand}</h5>
                <p class="card-text">$ ${this.price}</p>
                <button type='btn' class="btn btn-primary" onclick="app.gunsController.buyItem()">Buy Item</button>
            </div>
        </div>
    </div>
        `
    }
}