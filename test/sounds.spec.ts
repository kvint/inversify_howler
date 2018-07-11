import 'jasmine'
import 'howler'
import {expect} from 'chai';
import SoundItem from "../src/app/modules/sound/SoundItem";

describe('Sound tests', () => {
    it('expects Howl', () => {
        expect(Howler).be.null;
    });
    it('SoundItem preload', async () => {
        const item = new SoundItem("1");
        await item.preloadSound();
        await item.playSound();
    });

});