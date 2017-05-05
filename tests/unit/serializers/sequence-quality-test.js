import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-quality', 'Unit | Serializer | Sequence_Quality', {
  needs: [
    'serializer:sequence-quality',
    'model:codeable-concept',
    'model:quantity',
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