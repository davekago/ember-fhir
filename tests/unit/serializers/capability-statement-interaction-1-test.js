import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-interaction-1', 'Unit | Serializer | CapabilityStatement_Interaction1', {
  needs: [
    'serializer:capability-statement-interaction-1',
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