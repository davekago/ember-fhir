import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header-source', 'Unit | Serializer | MessageHeader_Source', {
  needs: [
    'serializer:message-header-source',
    'model:contact-point',
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