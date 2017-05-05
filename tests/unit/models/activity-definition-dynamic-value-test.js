import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-definition-dynamic-value', 'Unit | Model | ActivityDefinition_DynamicValue', {
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