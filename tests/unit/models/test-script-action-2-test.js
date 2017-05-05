import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-action-2', 'Unit | Model | TestScript_Action2', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-operation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});