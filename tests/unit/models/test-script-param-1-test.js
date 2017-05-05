import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-param-1', 'Unit | Model | TestScript_Param1', {
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