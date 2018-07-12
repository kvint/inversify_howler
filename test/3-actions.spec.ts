import 'jasmine'
import 'howler'
import {expect} from 'chai'
import {SoundAction} from "../src/app/modules/core/SoundAction";
import {WaitAction} from "../src/app/modules/core/WaitAction";
import {SequenceAction} from "../src/app/modules/core/SequenceAction";
import {Action} from "../src/app/modules/core/Action";
import {LazyAction} from "../src/app/modules/core/LazyAction";

describe('Actions tests', () => {

    it('Base', async () => new Action().run());

    it('Sound', async () => new SoundAction("1").run());

    describe("Wait action", ()=>{

        it('delays', async () => {
            const started = Date.now();
            await new WaitAction(1).run();
            const delay = Math.round((Date.now() - started) / 1000);

            expect(delay).to.be.equal(1)
        });

    });

    it('Sequence', async () => {
        let wait05 = new WaitAction(0.5);
        await new SequenceAction([
            wait05,
            new SoundAction("2"),
            wait05,
            new SoundAction("3"),
            wait05,
            new SoundAction("4"),
            wait05
        ]).run();
    });

    describe("Lazy", () => {

        it('works', async () => {

            let param = "some value";
            await new LazyAction(() => {
                param = "changed value";
            }).run();

            expect(param).to.be.equal("changed value");
        });

        it('Sequence', async () => {

            let counter = 0;
            await new SequenceAction([
                new LazyAction(() => {
                    expect(counter).to.be.equal(0);
                    counter++;
                }),
                new LazyAction(() => {
                    expect(counter).to.be.equal(1);
                    counter++;
                }),
                new LazyAction(() => {
                    expect(counter).to.be.equal(2);
                    counter++;
                }),
                new LazyAction(() => {
                    expect(counter).to.be.equal(3);
                    counter++;
                }),

            ]).run();

            expect(counter).to.be.equal(4);
        });

    });

    // it('sequence action', async () => new SequenceAction([
    //     new SoundAction("1"),
    //     new SoundAction("2")
    // ]).run());


    // it('sequence + parallel action', async () => new SequenceAction([
    //     const prll = new SequenceAction([
    //         new SoundAction("1"),
    //         new SoundAction("2"),

    //         new SoundAction("1"),
    //         new ParallelAction([
    //             new SoundAction("1"),
    //             new SoundAction("2"),
    //         ]),
    //         new SequenceAction()
    //     ]);
    // ]).run());
});
