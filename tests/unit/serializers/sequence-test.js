import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence', 'Unit | Serializer | Sequence', {
  needs: [
    'serializer:sequence',
    'model:identifier',
    'model:reference',
    'model:quantity',
    'model:sequence-reference-seq',
    'model:sequence-variant',
    'model:sequence-quality',
    'model:sequence-repository',
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