import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-definition-mapping', 'Unit | Serializer | StructureDefinition_Mapping', {
  needs: [
    'serializer:structure-definition-mapping',
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