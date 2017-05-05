import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-detail', 'Unit | Serializer | Claim_Detail', {
  needs: [
    'serializer:claim-detail',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference',
    'model:claim-sub-detail',
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