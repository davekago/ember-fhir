import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen-container', 'Unit | Serializer | Specimen_Container', {
  needs: [
    'serializer:specimen-container',
    'model:identifier',
    'model:codeable-concept',
    'model:quantity',
    'model:reference',
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