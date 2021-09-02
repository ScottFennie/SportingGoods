import { ProxyState } from "../AppState.js"
import { Gun } from "../Models/Gun.js"

class GunsService {
    constructor() {

    }

    buyItems(gunData) {
        let foundItem = ProxyState.guns.find(i => i.id == gunData)
        if (foundItem.quantity >= 1) {
            foundItem.quantity--
                ProxyState.guns = ProxyState.guns
            console.log(ProxyState.guns)
            ProxyState.cart = [...ProxyState.cart, foundItem]
            console.log(ProxyState.cart)
        } else {

        }



    }

}


export const gunsService = new GunsService()