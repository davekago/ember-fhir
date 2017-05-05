import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-param-3', 'Unit | Model | TestScript_Param3', {
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