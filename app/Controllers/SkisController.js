import { ProxyState } from "../AppState.js"
import { skisService } from "../Services/SkisService.js"


function _drawSkis() {
    let template = ""

    ProxyState.skis.forEach(s => template += s.CardTemplate)
    document.getElementById("product-card").innerHTML = template
}

function _drawHome() {
    let template = ""

    document.getElementById("product-card").innerHTML = template
}



export class SkisController {
    constructor() {
        console.log("ski controller working")
        _drawSkis()
    }

    showSkis() {
        _drawSkis()
    }

    goHome() {

        _drawHome()
    }


}