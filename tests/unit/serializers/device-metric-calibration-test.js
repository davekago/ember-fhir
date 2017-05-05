import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-metric-calibration', 'Unit | Serializer | DeviceMetric_Calibration', {
  needs: [
    'serializer:device-metric-calibration',
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