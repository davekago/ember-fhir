import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-manifest', 'Unit | Serializer | DocumentManifest', {
  needs: [
    'serializer:document-manifest',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:document-manifest-content',
    'model:document-manifest-related',
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