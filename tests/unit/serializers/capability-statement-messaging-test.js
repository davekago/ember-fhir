import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-messaging', 'Unit | Serializer | CapabilityStatement_Messaging', {
  needs: [
    'serializer:capability-statement-messaging',
    'model:capability-statement-endpoint',
    'model:capability-statement-supported-message',
    'model:capability-statement-event',
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