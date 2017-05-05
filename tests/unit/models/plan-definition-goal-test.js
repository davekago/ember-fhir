import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-goal', 'Unit | Model | PlanDefinition_Goal', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:related-artifact',
    'model:plan-definition-target'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});