import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-implementation', 'Unit | Serializer | CapabilityStatement_Implementation', {
  needs: [
    'serializer:capability-statement-implementation',
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