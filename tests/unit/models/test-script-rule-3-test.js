import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule-3', 'Unit | Model | TestScript_Rule3', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-param-3'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});