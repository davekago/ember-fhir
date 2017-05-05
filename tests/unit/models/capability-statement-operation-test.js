import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-operation', 'Unit | Model | CapabilityStatement_Operation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});