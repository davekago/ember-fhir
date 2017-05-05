import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-manifest-related', 'Unit | Serializer | DocumentManifest_Related', {
  needs: [
    'serializer:document-manifest-related',
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