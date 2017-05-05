import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-target', 'Unit | Serializer | StructureMap_Target', {
  needs: [
    'serializer:structure-map-target',
    'model:structure-map-parameter',
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