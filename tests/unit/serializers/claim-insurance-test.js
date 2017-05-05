import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-insurance', 'Unit | Serializer | Claim_Insurance', {
  needs: [
    'serializer:claim-insurance',
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