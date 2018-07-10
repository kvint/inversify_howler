import 'reflect-metadata'
import 'howler'
import {Container} from "inversify";
import TYPES from "./TYPES";
import Game from "./app/Game";
import {SoundManager} from "./app/modules/sound/SoundManager";

const di = new Container();

di.bind(TYPES.SOUNDS).to(SoundManager);
di.bind(TYPES.GAME).to(Game);

export default di