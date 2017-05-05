import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-source', 'Unit | Serializer | AuditEvent_Source', {
  needs: [
    'serializer:audit-event-source',
    'model:identifier',
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