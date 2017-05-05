import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-information', 'Unit | Serializer | Claim_Information', {
  needs: [
    'serializer:claim-information',
    'model:codeable-concept',
    'model:period',
    'model:quantity',
    'model:attachment',
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