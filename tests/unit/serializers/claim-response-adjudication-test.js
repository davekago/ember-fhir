import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-adjudication', 'Unit | Serializer | ClaimResponse_Adjudication', {
  needs: [
    'serializer:claim-response-adjudication',
    'model:codeable-concept',
    'model:money',
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