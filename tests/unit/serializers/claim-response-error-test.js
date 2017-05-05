import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-error', 'Unit | Serializer | ClaimResponse_Error', {
  needs: [
    'serializer:claim-response-error',
    'model:codeable-concept',
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