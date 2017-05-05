import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication-payload', 'Unit | Serializer | Communication_Payload', {
  needs: [
    'serializer:communication-payload',
    'model:attachment',
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