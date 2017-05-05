import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-interaction-1', 'Unit | Model | CapabilityStatement_Interaction1', {
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