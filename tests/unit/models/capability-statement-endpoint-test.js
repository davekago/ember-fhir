import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-endpoint', 'Unit | Model | CapabilityStatement_Endpoint', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});