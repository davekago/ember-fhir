import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-administration-performer', 'Unit | Serializer | MedicationAdministration_Performer', {
  needs: [
    'serializer:medication-administration-performer',
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