import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication-request-requester', 'Unit | Serializer | CommunicationRequest_Requester', {
  needs: [
    'serializer:communication-request-requester',
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