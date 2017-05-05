import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-supported-message', 'Unit | Serializer | CapabilityStatement_SupportedMessage', {
  needs: [
    'serializer:capability-statement-supported-message',
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