import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-udi', 'Unit | Serializer | Device_Udi', {
  needs: [
    'serializer:device-udi',
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