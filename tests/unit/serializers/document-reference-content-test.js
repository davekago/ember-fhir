import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-content', 'Unit | Serializer | DocumentReference_Content', {
  needs: [
    'serializer:document-reference-content',
    'model:attachment',
    'model:coding',
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