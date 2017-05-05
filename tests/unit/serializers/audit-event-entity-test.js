import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-entity', 'Unit | Serializer | AuditEvent_Entity', {
  needs: [
    'serializer:audit-event-entity',
    'model:identifier',
    'model:reference',
    'model:coding',
    'model:audit-event-detail',
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