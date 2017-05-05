import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-detail-1', 'Unit | Serializer | ClaimResponse_Detail1', {
  needs: [
    'serializer:claim-response-detail-1',
    'model:codeable-concept',
    'model:money',
    'model:claim-response-adjudication',
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