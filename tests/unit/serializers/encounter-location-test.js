import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-location', 'Unit | Serializer | Encounter_Location', {
  needs: [
    'serializer:encounter-location',
    'model:reference',
    'model:period',
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