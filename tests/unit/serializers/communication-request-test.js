import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication-request', 'Unit | Serializer | CommunicationRequest', {
  needs: [
    'serializer:communication-request',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:communication-request-payload',
    'model:period',
    'model:communication-request-requester',
    'model:annotation',
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