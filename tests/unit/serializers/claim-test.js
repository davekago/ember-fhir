import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim', 'Unit | Serializer | Claim', {
  needs: [
    'serializer:claim',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:claim-related',
    'model:claim-payee',
    'model:claim-care-team',
    'model:claim-information',
    'model:claim-diagnosis',
    'model:claim-procedure',
    'model:claim-insurance',
    'model:claim-accident',
    'model:claim-item',
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