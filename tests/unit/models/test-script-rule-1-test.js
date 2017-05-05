import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule-1', 'Unit | Model | TestScript_Rule1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-param-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});