import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation-reference-range', 'Unit | Serializer | Observation_ReferenceRange', {
  needs: [
    'serializer:observation-reference-range',
    'model:quantity',
    'model:codeable-concept',
    'model:range',
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