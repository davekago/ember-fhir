import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-definition-differential', 'Unit | Serializer | StructureDefinition_Differential', {
  needs: [
    'serializer:structure-definition-differential',
    'model:element-definition',
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