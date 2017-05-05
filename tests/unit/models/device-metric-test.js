import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-metric', 'Unit | Model | DeviceMetric', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:timing',
    'model:device-metric-calibration'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});