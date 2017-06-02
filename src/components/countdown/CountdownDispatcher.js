import { Dispatcher } from 'flux';

export default class CountdownDispatcher extends Dispatcher {
    handleAction(action) {
        console.log('dispatching action: ', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        });
    }
}