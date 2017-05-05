import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request-requester', 'Unit | Serializer | MedicationRequest_Requester', {
  needs: [
    'serializer:medication-request-requester',
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