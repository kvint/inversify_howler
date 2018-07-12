import {Action} from "./Action";

export class SequenceAction extends Action {

    constructor(protected actions: Action<any>[]) {
        super();
    }

    async execute(): Promise<any> {
        for (let action of this.actions) {
            await action.run();
        }
    }
}