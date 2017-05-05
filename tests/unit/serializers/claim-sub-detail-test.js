import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-sub-detail', 'Unit | Serializer | Claim_SubDetail', {
  needs: [
    'serializer:claim-sub-detail',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
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