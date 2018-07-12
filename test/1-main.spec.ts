import 'jasmine';
import 'reflect-metadata';
import {assert} from 'chai'
import {Container} from "inversify";
import TYPES from "../src/TYPES";
import {EventDispatcher} from "../src/app/modules/core/EventDispatcher";

describe('Initial test suite', () => {

    const di = new Container();
    di.bind(TYPES.DISPATCHER).toConstantValue(new EventDispatcher());

    it('failure', () => {
        assert(true, "true is true");
    });

    it('dispatcher dispatches events', (done) => {

    	const dispatcher: EventDispatcher = di.get(TYPES.DISPATCHER);
    	dispatcher.on("eventNamed", () => done(), this);
    	dispatcher.dispatch("eventNamed");

    });

});