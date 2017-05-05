import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-administration', 'Unit | Serializer | MedicationAdministration', {
  needs: [
    'serializer:medication-administration',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:medication-administration-performer',
    'model:annotation',
    'model:medication-administration-dosage',
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