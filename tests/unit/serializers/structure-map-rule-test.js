import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-rule', 'Unit | Serializer | StructureMap_Rule', {
  needs: [
    'serializer:structure-map-rule',
    'model:structure-map-source',
    'model:structure-map-target',
    'model:structure-map-rule',
    'model:structure-map-dependent',
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