import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-agent', 'Unit | Model | AuditEvent_Agent', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:identifier',
    'model:coding',
    'model:audit-event-network'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});