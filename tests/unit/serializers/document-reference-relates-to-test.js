import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-relates-to', 'Unit | Serializer | DocumentReference_RelatesTo', {
  needs: [
    'serializer:document-reference-relates-to',
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