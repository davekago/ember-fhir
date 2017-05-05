import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-implementation', 'Unit | Model | CapabilityStatement_Implementation', {
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