import { moduleForModel, test } from 'ember-qunit';

moduleForModel('healthcare-service-not-available', 'Unit | Model | HealthcareService_NotAvailable', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});