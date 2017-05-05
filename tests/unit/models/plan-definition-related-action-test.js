import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-related-action', 'Unit | Model | PlanDefinition_RelatedAction', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:duration',
    'model:range'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});