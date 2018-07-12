import {Action} from "./Action";

export class WaitAction extends Action {
    constructor(protected time: number) {
        super();
    }

    async execute(): Promise<any> {
        await new Promise((resolve) => setTimeout(() => {resolve()}, this.time * 1000));
    }
}