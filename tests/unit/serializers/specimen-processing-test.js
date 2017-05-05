import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen-processing', 'Unit | Serializer | Specimen_Processing', {
  needs: [
    'serializer:specimen-processing',
    'model:codeable-concept',
    'model:reference',
    'model:period',
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