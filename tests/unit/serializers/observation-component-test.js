import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation-component', 'Unit | Serializer | Observation_Component', {
  needs: [
    'serializer:observation-component',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
    'model:ratio',
    'model:sampled-data',
    'model:attachment',
    'model:period',
    'model:observation-reference-range',
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