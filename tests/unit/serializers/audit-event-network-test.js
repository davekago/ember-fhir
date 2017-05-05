import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-network', 'Unit | Serializer | AuditEvent_Network', {
  needs: [
    'serializer:audit-event-network',
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