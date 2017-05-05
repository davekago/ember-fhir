import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-request', 'Unit | Serializer | DeviceRequest', {
  needs: [
    'serializer:device-request',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:timing',
    'model:device-request-requester',
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