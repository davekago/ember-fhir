import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-item', 'Unit | Serializer | ClaimResponse_Item', {
  needs: [
    'serializer:claim-response-item',
    'model:claim-response-adjudication',
    'model:claim-response-detail',
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