import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-metric-calibration', 'Unit | Model | DeviceMetric_Calibration', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});