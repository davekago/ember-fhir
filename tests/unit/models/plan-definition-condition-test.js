import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-condition', 'Unit | Model | PlanDefinition_Condition', {
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