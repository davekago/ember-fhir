import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-diagnosis', 'Unit | Serializer | Claim_Diagnosis', {
  needs: [
    'serializer:claim-diagnosis',
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