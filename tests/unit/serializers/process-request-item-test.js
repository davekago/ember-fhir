import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-request-item', 'Unit | Serializer | ProcessRequest_Item', {
  needs: [
    'serializer:process-request-item',
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