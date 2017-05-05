import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-related', 'Unit | Serializer | Claim_Related', {
  needs: [
    'serializer:claim-related',
    'model:reference',
    'model:codeable-concept',
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