import {Action} from "./Action";
import SoundItem from "../sound/SoundItem";

export class SoundAction extends Action {

    protected item: SoundItem;

    constructor(soundName: string) {
        super();
        this.item = new SoundItem(soundName);
    }

    async execute(): Promise<any> {
        await this.item.preloadSound();
        await this.item.playSound();
    }
}