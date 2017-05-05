import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-endpoint', 'Unit | Serializer | CapabilityStatement_Endpoint', {
  needs: [
    'serializer:capability-statement-endpoint',
    'model:coding',
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