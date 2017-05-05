import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-request-requester', 'Unit | Serializer | DeviceRequest_Requester', {
  needs: [
    'serializer:device-request-requester',
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