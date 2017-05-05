import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-class-history', 'Unit | Serializer | Encounter_ClassHistory', {
  needs: [
    'serializer:encounter-class-history',
    'model:coding',
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