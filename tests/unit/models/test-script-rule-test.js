import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule', 'Unit | Model | TestScript_Rule', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:test-script-param'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});