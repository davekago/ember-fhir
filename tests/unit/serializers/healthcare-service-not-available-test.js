import { moduleForModel, test } from 'ember-qunit';

moduleForModel('healthcare-service-not-available', 'Unit | Serializer | HealthcareService_NotAvailable', {
  needs: [
    'serializer:healthcare-service-not-available',
    'model:period',
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