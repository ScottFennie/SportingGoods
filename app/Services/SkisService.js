import { ProxyState } from "../AppState.js"
import { Ski } from "../Models/Ski.js"

class SkisService {

    constructor() {
        console.log("hello from da skis service")
    }

    // _addSkis(skiData) {
    //     console.log("add skis")

    //     ProxyState.skis = [...ProxyState.skis, new Ski(skiData)]
    // }
}

export const skisService = new SkisService