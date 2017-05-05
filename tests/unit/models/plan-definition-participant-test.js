import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-participant', 'Unit | Model | PlanDefinition_Participant', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});