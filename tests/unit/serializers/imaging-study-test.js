import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-study', 'Unit | Serializer | ImagingStudy', {
  needs: [
    'serializer:imaging-study',
    'model:identifier',
    'model:coding',
    'model:reference',
    'model:codeable-concept',
    'model:imaging-study-series',
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