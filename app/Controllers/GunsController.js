import { ProxyState } from "../AppState.js";
import { gunsService } from "../Services/GunsService.js";

function _drawGuns() {
    let template = ""
    ProxyState.guns.forEach(g => template += g.CardTemplate)
    document.getElementById("product-card").innerHTML = template
    document.getElementById("cart").innerText =
}


export class GunsController {
    constructor() {
        console.log("guns...bro");
        ProxyState.on('guns', _drawGuns)
        _drawGuns()
    }


    buyItems(gunData) {
        gunsService.buyItems(gunData)
    }

    showGuns() {
        _drawGuns()
    }

}