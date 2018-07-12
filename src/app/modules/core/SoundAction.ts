import {Action} from "./Action";
import SoundItem from "../sound/SoundItem";

export class SoundAction extends Action<string> {

    async execute(soundName: string): Promise<any> {
        const item = new SoundItem(soundName);
        await item.preloadSound();
        await item.playSound();
    }
}