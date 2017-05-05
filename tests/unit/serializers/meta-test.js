import { moduleForModel, test } from 'ember-qunit';

moduleForModel('meta', 'Unit | Serializer | Meta', {
  needs: [
    'serializer:meta',
    'model:coding',
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