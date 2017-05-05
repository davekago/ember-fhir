import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header-destination', 'Unit | Serializer | MessageHeader_Destination', {
  needs: [
    'serializer:message-header-destination',
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