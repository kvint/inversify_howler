export default class /**/SoundItem extends Howl {
    constructor(public id: string) {
        super({src: `data/sound${id}.wav`});
    }
    preloadSound(): Promise<any> {
        this.load();
        return new Promise((resolve) => {
            this.once("load", () => {
                resolve();
            })
        });
    }
    playSound(): Promise<any> {
        this.play();
        return new Promise((resolve) => {
            this.once("end", () => {
                resolve();
            })
        });
    }
}