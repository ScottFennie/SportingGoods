import { ApparelsController } from "./Controllers/ApparelsController.js";
import { GunsController } from "./Controllers/GunsController.js";
import { SkisController } from "./Controllers/SkisController.js";


class App {

    gunsController = new GunsController();
    skisController = new SkisController();

    apparelsController = new ApparelsController();
}

window["app"] = new App();