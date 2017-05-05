import { moduleForModel, test } from 'ember-qunit';

moduleForModel('healthcare-service-available-time', 'Unit | Model | HealthcareService_AvailableTime', {
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