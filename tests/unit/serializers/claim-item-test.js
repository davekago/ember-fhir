import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-item', 'Unit | Serializer | Claim_Item', {
  needs: [
    'serializer:claim-item',
    'model:codeable-concept',
    'model:period',
    'model:address',
    'model:reference',
    'model:quantity',
    'model:money',
    'model:claim-detail',
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