import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-statement', 'Unit | Serializer | MedicationStatement', {
  needs: [
    'serializer:medication-statement',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:annotation',
    'model:dosage',
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