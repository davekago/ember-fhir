import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-assert', 'Unit | Model | TestScript_Assert', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-rule-2',
    'model:test-script-ruleset-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});