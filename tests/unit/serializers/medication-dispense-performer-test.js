import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-dispense-performer', 'Unit | Serializer | MedicationDispense_Performer', {
  needs: [
    'serializer:medication-dispense-performer',
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