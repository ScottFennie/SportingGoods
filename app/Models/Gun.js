import { generateId } from "../Utils/generateId.js"

export class Gun {
    constructor(gunData) {
        this.brand = gunData.brand
        this.caliber = gunData.caliber
        this.type = gunData.type
        this.price = gunData.price
        this.img = gunData.img
        this.quantity = gunData.quantity
        this.id = gunData.id || generateId()
    }

    get CardTemplate() {
        return /*html*/ `
        <div class="col-lg-2 d-flex justify-content-center">
        <div class=" my-2 card rounded text-center" style="width: 18rem;">
            <img src="${this.img}" class="rounded skis-img image-fluid card-img-top ${this.quantity <= 0 ? "gray" : ""}" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.brand}</h5>
                <p class="card-text">$ ${this.price}</p>
                <button type='btn' ${this.quantity < 1 ? "disabled" : ""} class="btn btn-primary"  onclick="app.gunsController.buyItems('${this.id}')">Buy Item</button>
            </div>
        </div>
    </div>
        `

    }
}