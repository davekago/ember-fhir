import { moduleForModel, test } from 'ember-qunit';

moduleForModel('healthcare-service', 'Unit | Model | HealthcareService', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:attachment',
    'model:contact-point',
    'model:healthcare-service-available-time',
    'model:healthcare-service-not-available'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});