import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-related', 'Unit | Serializer | DocumentReference_Related', {
  needs: [
    'serializer:document-reference-related',
    'model:identifier',
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