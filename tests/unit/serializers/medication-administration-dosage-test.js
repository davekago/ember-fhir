import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-administration-dosage', 'Unit | Serializer | MedicationAdministration_Dosage', {
  needs: [
    'serializer:medication-administration-dosage',
    'model:codeable-concept',
    'model:quantity',
    'model:ratio',
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