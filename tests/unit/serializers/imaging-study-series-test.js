import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-study-series', 'Unit | Serializer | ImagingStudy_Series', {
  needs: [
    'serializer:imaging-study-series',
    'model:coding',
    'model:reference',
    'model:imaging-study-instance',
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