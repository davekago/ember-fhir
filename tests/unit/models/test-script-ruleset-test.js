import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-ruleset', 'Unit | Model | TestScript_Ruleset', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:test-script-rule-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});