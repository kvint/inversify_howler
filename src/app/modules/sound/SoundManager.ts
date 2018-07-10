import {injectable} from "inversify";
import di from "../../../inversify.config";
import ISoundManager from "./ISoundManager";
import SoundItem from "./SoundItem";

@injectable()
export class SoundManager implements ISoundManager {

    async preloadSound(sid: symbol) {
        await di.get<SoundItem>(sid).preloadSound();
    }
    playSound(sid: symbol): Promise<any> {
        di.get<SoundItem>(sid).play();
        return Promise.resolve();
    }
}