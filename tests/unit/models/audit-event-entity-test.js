import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-entity', 'Unit | Model | AuditEvent_Entity', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:coding',
    'model:audit-event-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});