import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-manifest', 'Unit | Serializer | ImagingManifest', {
  needs: [
    'serializer:imaging-manifest',
    'model:identifier',
    'model:reference',
    'model:imaging-manifest-study',
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