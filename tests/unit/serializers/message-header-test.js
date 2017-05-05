import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header', 'Unit | Serializer | MessageHeader', {
  needs: [
    'serializer:message-header',
    'model:coding',
    'model:message-header-destination',
    'model:reference',
    'model:message-header-source',
    'model:codeable-concept',
    'model:message-header-response',
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