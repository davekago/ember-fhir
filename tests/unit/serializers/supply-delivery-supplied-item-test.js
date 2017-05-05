import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-delivery-supplied-item', 'Unit | Serializer | SupplyDelivery_SuppliedItem', {
  needs: [
    'serializer:supply-delivery-supplied-item',
    'model:quantity',
    'model:codeable-concept',
    'model:reference',
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