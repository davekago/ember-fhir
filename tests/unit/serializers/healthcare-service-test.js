import { moduleForModel, test } from 'ember-qunit';

moduleForModel('healthcare-service', 'Unit | Serializer | HealthcareService', {
  needs: [
    'serializer:healthcare-service',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:attachment',
    'model:contact-point',
    'model:healthcare-service-available-time',
    'model:healthcare-service-not-available',
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