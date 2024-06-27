import {initConfig} from "./config.js";
import { registerSettings } from "./settings.js";

export const MODULE_ID = "module-id";

Hooks.on("init", () => {
    console.log('GIGGIO TEST')
    initConfig();
    registerSettings();
});