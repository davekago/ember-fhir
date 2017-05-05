import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition-parameter', 'Unit | Serializer | OperationDefinition_Parameter', {
  needs: [
    'serializer:operation-definition-parameter',
    'model:reference',
    'model:operation-definition-binding',
    'model:operation-definition-parameter',
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