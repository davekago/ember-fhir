import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition-binding', 'Unit | Serializer | OperationDefinition_Binding', {
  needs: [
    'serializer:operation-definition-binding',
    'model:reference',
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