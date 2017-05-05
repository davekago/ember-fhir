import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-event', 'Unit | Model | CapabilityStatement_Event', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});