import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-teardown', 'Unit | Model | TestScript_Teardown', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-action-2'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});