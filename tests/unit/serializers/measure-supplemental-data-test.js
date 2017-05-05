import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-supplemental-data', 'Unit | Serializer | Measure_SupplementalData', {
  needs: [
    'serializer:measure-supplemental-data',
    'model:identifier',
    'model:codeable-concept',
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