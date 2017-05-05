import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-diagnosis', 'Unit | Serializer | Encounter_Diagnosis', {
  needs: [
    'serializer:encounter-diagnosis',
    'model:reference',
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