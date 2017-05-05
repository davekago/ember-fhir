import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-network', 'Unit | Model | AuditEvent_Network', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});