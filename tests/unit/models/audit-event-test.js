import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event', 'Unit | Model | AuditEvent', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:codeable-concept',
    'model:audit-event-agent',
    'model:audit-event-source',
    'model:audit-event-entity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});