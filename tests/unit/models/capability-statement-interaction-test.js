import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-interaction', 'Unit | Model | CapabilityStatement_Interaction', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});