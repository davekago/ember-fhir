import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-dynamic-value', 'Unit | Serializer | PlanDefinition_DynamicValue', {
  needs: [
    'serializer:plan-definition-dynamic-value',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});