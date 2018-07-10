import 'reflect-metadata'
import di from "./inversify.config";
import IGame from "./app/IGame";
import ISoundManager from "./app/modules/sound/ISoundManager";
import SoundType from "./app/modules/sound/SoundType";
import TYPES from "./TYPES";

async function main() {
    console.log("the App started!");

    await di.get<IGame>(TYPES.GAME).init();
    await di.get<ISoundManager>(TYPES.SOUNDS).playSound(SoundType.Welcome);

}

main();