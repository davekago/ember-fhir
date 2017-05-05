import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-action', 'Unit | Model | PlanDefinition_Action', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:related-artifact',
    'model:trigger-definition',
    'model:plan-definition-condition',
    'model:data-requirement',
    'model:plan-definition-related-action',
    'model:period',
    'model:duration',
    'model:range',
    'model:timing',
    'model:plan-definition-participant',
    'model:coding',
    'model:reference',
    'model:plan-definition-dynamic-value',
    'model:plan-definition-action'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});