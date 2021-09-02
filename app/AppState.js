import { Apparel } from "./Models/Apparel.js"
import { Gun } from "./Models/Gun.js"
import { Ski } from "./Models/Ski.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
    /** @type {import('./Models/Value').Value[]} */
    /** @type {import('./Models/Ski').Ski[]} */
    values = []

    skis = [
        new Ski({ brand: "Rossi", size: 192, pole: true, color: "red", img: "https://images.evo.com/imgp/zoom/95825/473280/clone.jpg", price: 500, quantity: 1 }),
        new Ski({ brand: "K2", size: 180, pole: false, color: "blue", img: "https://images.evo.com/imgp/zoom/106139/443500/clone.jpg", price: 7000, quantity: 1 })
    ]

    guns = [
        new Gun({ brand: "Remington", caliber: 30, type: "rifle", price: 3.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxOW6rWtY7gdFftXq-aR7tdB1bLHQ4fvYWg&usqp=CAU", quantity: 1 }),
        new Gun({ brand: "SIG", caliber: 50, type: "rifle", price: 5.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7DMTVtK6TKlkWxV4XH3PD7TBYD75PzbJSg&usqp=CAU", quantity: 1 })
    ]


    apparels = [

        new Apparel({ brand: "gucci", size: "XL", color: "brown", img: "https://cdn.shopify.com/s/files/1/0093/0716/0631/products/8BT-LH-WHT-SHRTOktoberfestLederhosenMen-GermanAuthenticMen_sRealGenuineLeather_4000x.progressive.jpg?v=1626182680", description: "dang, thaas some nice liders", price: 3000, quantity: 1 }),
        new Apparel({ brand: "Carhartt", size: "XL", color: "brown", img: "https://cdn.shopify.com/s/files/1/0093/0716/0631/products/9BT-LH-LBR-SHRTOktoberfestLederhosenMen-GermanAuthenticMen_sRealGenuineLeather_393x@3x.progressive.jpg?v=1626181470", description: "dang, thaas some nice liders", price: 30, quantity: 1 })
    ]

    cart = []




}

export const ProxyState = new Proxy(new AppState(), {
    get(target, prop) {
        isValidProp(target, prop)
        return target[prop]
    },
    set(target, prop, value) {
        isValidProp(target, prop)
        target[prop] = value
        target.emit(prop, value)
        return true
    }
})