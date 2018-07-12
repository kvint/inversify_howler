import 'reflect-metadata'
import 'howler'
import {Container} from "inversify";
import TYPES from "./TYPES";
import Game from "./app/Game";
import {SoundManager} from "./app/modules/sound/SoundManager";
import {EventDispatcher} from "./app/modules/core/EventDispatcher";

export interface ISoundEngine extends Howl {}

const di = new Container();

di.bind(TYPES.SOUNDS).to(SoundManager);
di.bind(TYPES.GAME).to(Game);
di.bind(TYPES.DISPATCHER).to(EventDispatcher);

export default di
