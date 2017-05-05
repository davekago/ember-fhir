import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-use-statement', 'Unit | Serializer | DeviceUseStatement', {
  needs: [
    'serializer:device-use-statement',
    'model:identifier',
    'model:reference',
    'model:period',
    'model:timing',
    'model:codeable-concept',
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