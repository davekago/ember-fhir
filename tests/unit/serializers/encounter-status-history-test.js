import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-status-history', 'Unit | Serializer | Encounter_StatusHistory', {
  needs: [
    'serializer:encounter-status-history',
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