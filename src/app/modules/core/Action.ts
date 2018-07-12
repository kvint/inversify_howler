import {BaseAction} from "./BaseAction";

export class Action<T= never> extends BaseAction<T> {

    async execute(commandData?: T): Promise<any> {
        this.resolve();
    }

    async terminate(): Promise<any> {
        this.reject();
    }

    async failed(reason: any): Promise<any> {
        debugger;
        return super.failed(reason);
    }
}
