import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-payment', 'Unit | Serializer | ClaimResponse_Payment', {
  needs: [
    'serializer:claim-response-payment',
    'model:codeable-concept',
    'model:money',
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