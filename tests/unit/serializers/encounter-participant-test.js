import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-participant', 'Unit | Serializer | Encounter_Participant', {
  needs: [
    'serializer:encounter-participant',
    'model:codeable-concept',
    'model:period',
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