import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-population', 'Unit | Serializer | Measure_Population', {
  needs: [
    'serializer:measure-population',
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