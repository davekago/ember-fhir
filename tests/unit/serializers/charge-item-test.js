import { moduleForModel, test } from 'ember-qunit';

moduleForModel('charge-item', 'Unit | Serializer | ChargeItem', {
  needs: [
    'serializer:charge-item',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:timing',
    'model:charge-item-participant',
    'model:quantity',
    'model:money',
    'model:annotation',
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