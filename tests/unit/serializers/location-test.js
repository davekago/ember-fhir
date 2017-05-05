import { moduleForModel, test } from 'ember-qunit';

moduleForModel('location', 'Unit | Serializer | Location', {
  needs: [
    'serializer:location',
    'model:identifier',
    'model:coding',
    'model:codeable-concept',
    'model:contact-point',
    'model:address',
    'model:location-position',
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