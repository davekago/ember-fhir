import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-messaging', 'Unit | Model | CapabilityStatement_Messaging', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:capability-statement-endpoint',
    'model:capability-statement-supported-message',
    'model:capability-statement-event'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});