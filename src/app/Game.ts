import {inject, injectable} from "inversify";
import di from "../inversify.config";
import SoundType from "./modules/sound/SoundType";
import ISoundManager from "./modules/sound/ISoundManager";
import SoundItem from "./modules/sound/SoundItem";
import TYPES from "../TYPES";

@injectable()
export default class Game {

    @inject(TYPES.SOUNDS)
    protected sManager: ISoundManager;

    async init() {
        // parse json and init sounds
        di.bind(SoundType.Welcome).toConstantValue(new SoundItem("soundA.wav"));

        await this.sManager.preloadSound(SoundType.Welcome);
    }
}