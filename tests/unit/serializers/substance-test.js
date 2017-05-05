import { moduleForModel, test } from 'ember-qunit';

moduleForModel('substance', 'Unit | Serializer | Substance', {
  needs: [
    'serializer:substance',
    'model:identifier',
    'model:codeable-concept',
    'model:substance-instance',
    'model:substance-ingredient',
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