import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation', 'Unit | Serializer | Observation', {
  needs: [
    'serializer:observation',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:quantity',
    'model:range',
    'model:ratio',
    'model:sampled-data',
    'model:attachment',
    'model:observation-reference-range',
    'model:observation-related',
    'model:observation-component',
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