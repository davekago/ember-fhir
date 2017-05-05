import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-definition-allowed-response', 'Unit | Serializer | MessageDefinition_AllowedResponse', {
  needs: [
    'serializer:message-definition-allowed-response',
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