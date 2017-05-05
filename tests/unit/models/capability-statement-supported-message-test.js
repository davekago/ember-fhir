import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-supported-message', 'Unit | Model | CapabilityStatement_SupportedMessage', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});