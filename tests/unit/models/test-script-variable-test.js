import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-variable', 'Unit | Model | TestScript_Variable', {
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