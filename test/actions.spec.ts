import 'jasmine'
import 'howler'
import {SoundAction} from "../src/app/modules/core/SoundAction";
import {WaitAction} from "../src/app/modules/core/WaitAction";
import {SequenceAction} from "../src/app/modules/core/SequenceAction";

describe('Actions tests', () => {

    it('Sound', async () => new SoundAction("1").run());

    it('Wait action', async () => new WaitAction(2).run());

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
        ]).run()
    });

    // it('sequence action', async () => new SequenceAction([
    //     new SoundAction("1"),
    //     new SoundAction("2")
    // ]).run());

    // it('lazy action', async () => new LazyAction(() => {
    //      return new SoundAction()
    // }).run());

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
