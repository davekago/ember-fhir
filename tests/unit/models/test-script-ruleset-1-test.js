import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-ruleset-1', 'Unit | Model | TestScript_Ruleset1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-script-rule-3'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});