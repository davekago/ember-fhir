import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-component-production-specification', 'Unit | Serializer | DeviceComponent_ProductionSpecification', {
  needs: [
    'serializer:device-component-production-specification',
    'model:codeable-concept',
    'model:identifier',
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