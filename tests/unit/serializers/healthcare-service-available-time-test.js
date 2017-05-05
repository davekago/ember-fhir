import { moduleForModel, test } from 'ember-qunit';

moduleForModel('healthcare-service-available-time', 'Unit | Serializer | HealthcareService_AvailableTime', {
  needs: [
    'serializer:healthcare-service-available-time',
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