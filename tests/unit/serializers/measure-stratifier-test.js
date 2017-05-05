import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-stratifier', 'Unit | Serializer | Measure_Stratifier', {
  needs: [
    'serializer:measure-stratifier',
    'model:identifier',
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