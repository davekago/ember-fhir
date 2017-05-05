import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-request-ordered-item', 'Unit | Serializer | SupplyRequest_OrderedItem', {
  needs: [
    'serializer:supply-request-ordered-item',
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