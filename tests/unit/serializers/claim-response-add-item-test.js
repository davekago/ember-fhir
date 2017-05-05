import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-add-item', 'Unit | Serializer | ClaimResponse_AddItem', {
  needs: [
    'serializer:claim-response-add-item',
    'model:codeable-concept',
    'model:money',
    'model:claim-response-adjudication',
    'model:claim-response-detail-1',
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