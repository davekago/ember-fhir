import { moduleForModel, test } from 'ember-qunit';

moduleForModel('location-position', 'Unit | Serializer | Location_Position', {
  needs: [
    'serializer:location-position',
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