import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-rule', 'Unit | Model | Contract_Rule', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});