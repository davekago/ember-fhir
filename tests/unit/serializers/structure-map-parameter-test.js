import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-parameter', 'Unit | Serializer | StructureMap_Parameter', {
  needs: [
    'serializer:structure-map-parameter',
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