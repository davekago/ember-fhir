import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-plan-activity', 'Unit | Model | CarePlan_Activity', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:annotation',
    'model:care-plan-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});