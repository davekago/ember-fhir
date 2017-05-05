import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen-collection', 'Unit | Serializer | Specimen_Collection', {
  needs: [
    'serializer:specimen-collection',
    'model:reference',
    'model:period',
    'model:quantity',
    'model:codeable-concept',
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