import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-action', 'Unit | Model | TestScript_Action', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-operation',
    'model:test-script-assert'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});