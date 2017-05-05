import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-reference-seq', 'Unit | Serializer | Sequence_ReferenceSeq', {
  needs: [
    'serializer:sequence-reference-seq',
    'model:codeable-concept',
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