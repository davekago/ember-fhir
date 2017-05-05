import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-plan-detail', 'Unit | Model | CarePlan_Detail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:timing',
    'model:period',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});