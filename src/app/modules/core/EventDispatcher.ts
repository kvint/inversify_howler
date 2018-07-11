import * as EventEmitter from "eventemitter3";
import {injectable} from "inversify";

@injectable()
export class EventDispatcher extends EventEmitter {
	public dispatch(event: string, payload?: any): void {
		this.emit(event, payload);
	}
}