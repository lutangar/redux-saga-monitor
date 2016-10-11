# SagaMonitor

Used by the middleware to dispatch monitoring events. Actually the middleware dispatches 4 events:

- When an effect is triggered (via `yield someEffect`) the middleware invokes `effectTriggered`

- If the effect is resolved with success the middleware invokes `effectResolved`

- If the effect is rejected with an error the middleware invokes `effectRejected`

- finally is the effect is cancelled the middleware invokes `effectCancelled`

## Getting started

## Install
```bash
npm i --save redux-saga-monitor
```

> All credits goes to @yelouafi and [redux-saga](https://github.com/yelouafi/redux-saga) contributors.
> See this issue for further references https://github.com/yelouafi/redux-saga/issues/5