import { ProxyState } from "../AppState.js"

function _drawApparel() {

    let template = ""

    ProxyState.apparels.forEach(a => template += a.CardTemplate)
    document.getElementById("product-card").innerHTML = template
}

export class ApparelsController {

    constructor() {



    }

    showApparel() {

        _drawApparel()
    }


}