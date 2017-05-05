import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-operation', 'Unit | Serializer | CapabilityStatement_Operation', {
  needs: [
    'serializer:capability-statement-operation',
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