import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule-2', 'Unit | Model | TestScript_Rule2', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-param-2'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});