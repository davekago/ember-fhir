import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-dispense', 'Unit | Serializer | MedicationDispense', {
  needs: [
    'serializer:medication-dispense',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:medication-dispense-performer',
    'model:quantity',
    'model:annotation',
    'model:dosage',
    'model:medication-dispense-substitution',
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