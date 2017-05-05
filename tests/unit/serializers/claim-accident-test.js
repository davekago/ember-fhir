import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-accident', 'Unit | Serializer | Claim_Accident', {
  needs: [
    'serializer:claim-accident',
    'model:codeable-concept',
    'model:address',
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