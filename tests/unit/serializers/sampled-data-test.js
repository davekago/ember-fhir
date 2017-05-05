import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sampled-data', 'Unit | Serializer | SampledData', {
  needs: [
    'serializer:sampled-data',
    'model:quantity',
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