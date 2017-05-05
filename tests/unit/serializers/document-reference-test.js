import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference', 'Unit | Serializer | DocumentReference', {
  needs: [
    'serializer:document-reference',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:document-reference-relates-to',
    'model:document-reference-content',
    'model:document-reference-context',
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