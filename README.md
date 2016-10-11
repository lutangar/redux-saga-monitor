# SagaMonitor

Used by the middleware to dispatch monitoring events. Actually the middleware dispatches 4 events:

- When an effect is triggered (via `yield someEffect`) the middleware invokes `effectTriggered`

- If the effect is resolved with success the middleware invokes `effectResolved`

- If the effect is rejected with an error the middleware invokes `effectRejected`

- finally is the effect is cancelled the middleware invokes `effectCancelled`

### Installation
```bash
npm i --save redux-saga-monitor
```

### Usage

### Middleware creation

Use `createSagaMonitor` helper function to control verbosity:
```
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createSagaMonitor } from 'redux-saga-monitor';
import { initialState } from './initialState';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: createSagaMonitor({ verbose: true }) });

export default applyMiddleware(sagaMiddleware)(createStore)(rootReducer, initialState);

sagaMiddleware.run(rootSaga);
```

Or yould just use it as before:
```
...
const sagaMiddleware = createSagaMiddleware({ sagaMonitor: createSagaMonitor({ verbose: true }) });
...
```

#### From your browser

You can print a snapshot of your sagas at any time from your browser's console:
```
$$LogSagas();
```

> All credits goes to @yelouafi and [redux-saga](https://github.com/yelouafi/redux-saga) contributors.
> See this issue for further references https://github.com/yelouafi/redux-saga/issues/5
