import test from 'tape';
import sagaMonitor, { createSagaMonitor } from '../src/index';

test('middleware output', assert => {
  assert.equal(typeof sagaMonitor, 'object',
    'sagaMonitor must expose an object by default');

  assert.equal(typeof sagaMonitor.effectTriggered, 'function',
    'effectTriggered must be a function');

  assert.equal(typeof sagaMonitor.effectResolved, 'function',
    'effectResolved must be a function');

  assert.equal(typeof sagaMonitor.effectRejected, 'function',
    'effectRejected must be a function');

  assert.equal(typeof sagaMonitor.effectCancelled, 'function',
    'effectCancelled must be a function');

  assert.equal(typeof createSagaMonitor, 'function',
    'createSagaMonitor must be a function');

  assert.isEquivalent(sagaMonitor, createSagaMonitor(),
    'sagaMonitor and createSagaMonitor() must be equivalent');

  assert.end();
});
