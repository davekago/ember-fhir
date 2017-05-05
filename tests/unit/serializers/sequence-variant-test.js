import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-variant', 'Unit | Serializer | Sequence_Variant', {
  needs: [
    'serializer:sequence-variant',
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