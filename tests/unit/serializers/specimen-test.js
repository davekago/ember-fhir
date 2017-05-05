import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen', 'Unit | Serializer | Specimen', {
  needs: [
    'serializer:specimen',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:specimen-collection',
    'model:specimen-processing',
    'model:specimen-container',
    'model:annotation',
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