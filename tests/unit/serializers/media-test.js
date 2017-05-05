import { moduleForModel, test } from 'ember-qunit';

moduleForModel('media', 'Unit | Serializer | Media', {
  needs: [
    'serializer:media',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:attachment',
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