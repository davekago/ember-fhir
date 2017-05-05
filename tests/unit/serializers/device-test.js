import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device', 'Unit | Serializer | Device', {
  needs: [
    'serializer:device',
    'model:identifier',
    'model:device-udi',
    'model:codeable-concept',
    'model:reference',
    'model:contact-point',
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