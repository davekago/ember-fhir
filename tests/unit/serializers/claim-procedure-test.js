import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-procedure', 'Unit | Serializer | Claim_Procedure', {
  needs: [
    'serializer:claim-procedure',
    'model:codeable-concept',
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