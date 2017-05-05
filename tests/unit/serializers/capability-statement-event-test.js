import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-event', 'Unit | Serializer | CapabilityStatement_Event', {
  needs: [
    'serializer:capability-statement-event',
    'model:coding',
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