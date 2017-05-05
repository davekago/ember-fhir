import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event', 'Unit | Serializer | AuditEvent', {
  needs: [
    'serializer:audit-event',
    'model:coding',
    'model:codeable-concept',
    'model:audit-event-agent',
    'model:audit-event-source',
    'model:audit-event-entity',
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