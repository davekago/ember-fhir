import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-definition-dynamic-value', 'Unit | Serializer | ActivityDefinition_DynamicValue', {
  needs: [
    'serializer:activity-definition-dynamic-value',
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