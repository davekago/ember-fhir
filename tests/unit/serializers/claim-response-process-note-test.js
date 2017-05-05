import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-process-note', 'Unit | Serializer | ClaimResponse_ProcessNote', {
  needs: [
    'serializer:claim-response-process-note',
    'model:codeable-concept',
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