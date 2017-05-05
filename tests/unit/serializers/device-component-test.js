import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-component', 'Unit | Serializer | DeviceComponent', {
  needs: [
    'serializer:device-component',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:device-component-production-specification',
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