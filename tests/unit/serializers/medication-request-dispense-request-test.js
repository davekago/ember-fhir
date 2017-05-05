import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request-dispense-request', 'Unit | Serializer | MedicationRequest_DispenseRequest', {
  needs: [
    'serializer:medication-request-dispense-request',
    'model:period',
    'model:quantity',
    'model:duration',
    'model:reference',
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