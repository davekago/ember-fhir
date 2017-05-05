import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map', 'Unit | Serializer | StructureMap', {
  needs: [
    'serializer:structure-map',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:structure-map-structure',
    'model:structure-map-group',
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