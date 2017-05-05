import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition', 'Unit | Model | PlanDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:period',
    'model:usage-context',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:reference',
    'model:plan-definition-goal',
    'model:plan-definition-action'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});