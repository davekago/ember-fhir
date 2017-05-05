import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-input', 'Unit | Serializer | StructureMap_Input', {
  needs: [
    'serializer:structure-map-input',
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