import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-detail', 'Unit | Serializer | AuditEvent_Detail', {
  needs: [
    'serializer:audit-event-detail',
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