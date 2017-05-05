import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response', 'Unit | Serializer | ClaimResponse', {
  needs: [
    'serializer:claim-response',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:claim-response-item',
    'model:claim-response-add-item',
    'model:claim-response-error',
    'model:money',
    'model:claim-response-payment',
    'model:coding',
    'model:claim-response-process-note',
    'model:claim-response-insurance',
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