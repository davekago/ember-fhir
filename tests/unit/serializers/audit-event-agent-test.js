import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-agent', 'Unit | Serializer | AuditEvent_Agent', {
  needs: [
    'serializer:audit-event-agent',
    'model:codeable-concept',
    'model:reference',
    'model:identifier',
    'model:coding',
    'model:audit-event-network',
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