export default class /**/SoundItem extends Howl {
    constructor(public id: string) {
        super({src: `data/sound${id}.wav`});
    }
    preloadSound(): Promise<any> {
        if (this.state() === "loaded") {
          return Promise.resolve();
        }
        this.load();
        return new Promise((resolve) => {
            this.once("load", () => {
                resolve();
            })
        });
    }
    async playSound(): Promise<any> {
        this.play();
        await new Promise((resolve) => {
            this.once("end", () => {
                console.log('Sound ended');
                resolve();
            })
        });
    }
}
