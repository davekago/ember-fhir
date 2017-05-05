import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-software', 'Unit | Serializer | CapabilityStatement_Software', {
  needs: [
    'serializer:capability-statement-software',
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