import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-metric', 'Unit | Serializer | DeviceMetric', {
  needs: [
    'serializer:device-metric',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:timing',
    'model:device-metric-calibration',
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