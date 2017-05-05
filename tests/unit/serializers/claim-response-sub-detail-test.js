import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-sub-detail', 'Unit | Serializer | ClaimResponse_SubDetail', {
  needs: [
    'serializer:claim-response-sub-detail',
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