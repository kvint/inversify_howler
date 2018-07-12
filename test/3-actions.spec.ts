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

    it('Wait', async () => new WaitAction(2).run());

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

        it('Base', async () => {

            let param = 0;
            await new LazyAction(() => {
                param = 1;
            }).run();

            expect(param).to.equal(1);
        });

        it('Sequence', async () => {

            let param = 0;
            await new SequenceAction([
                new LazyAction(() => {
                    expect(param).to.equal(0);
                    param++;
                }),
                new LazyAction(() => {
                    expect(param).to.equal(1);
                    param++;
                }),
                new LazyAction(() => {
                    expect(param).to.equal(2);
                    param++;
                }),
                new LazyAction(() => {
                    expect(param).to.equal(3);
                    param++;
                }),

            ]).run();

            expect(param).to.equal(4);
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
