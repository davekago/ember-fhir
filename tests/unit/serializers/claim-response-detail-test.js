import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-detail', 'Unit | Serializer | ClaimResponse_Detail', {
  needs: [
    'serializer:claim-response-detail',
    'model:claim-response-adjudication',
    'model:claim-response-sub-detail',
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