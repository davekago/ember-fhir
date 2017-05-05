import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-group', 'Unit | Serializer | StructureMap_Group', {
  needs: [
    'serializer:structure-map-group',
    'model:structure-map-input',
    'model:structure-map-rule',
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