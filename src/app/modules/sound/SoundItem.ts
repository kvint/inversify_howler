export default class SoundItem extends Howl {
    constructor(public id: string) {
        super({src: `${id}`});
    }
    preloadSound(): Promise<any> {
        this.load();
        return new Promise((resolve) => {
            this.once("load", () => {
                resolve();
            })
        });
    }
}