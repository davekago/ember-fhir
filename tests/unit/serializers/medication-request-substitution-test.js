import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request-substitution', 'Unit | Serializer | MedicationRequest_Substitution', {
  needs: [
    'serializer:medication-request-substitution',
    'model:codeable-concept',
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