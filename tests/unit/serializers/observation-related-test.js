import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation-related', 'Unit | Serializer | Observation_Related', {
  needs: [
    'serializer:observation-related',
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