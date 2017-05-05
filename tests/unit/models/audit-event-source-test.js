import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-event-source', 'Unit | Model | AuditEvent_Source', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});