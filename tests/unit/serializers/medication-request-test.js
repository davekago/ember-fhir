import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request', 'Unit | Serializer | MedicationRequest', {
  needs: [
    'serializer:medication-request',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:medication-request-requester',
    'model:annotation',
    'model:dosage',
    'model:medication-request-dispense-request',
    'model:medication-request-substitution',
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