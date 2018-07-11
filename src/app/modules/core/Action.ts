import {BaseAction} from "./BaseAction";

export class Action<T=never> extends BaseAction {

    async execute(commandData?: T): Promise<any> {
        return Promise.resolve();
    }
    async onFailed(commandData?: T): Promise<any> {
        // TODO: add log
        return Promise.resolve();
    }
}