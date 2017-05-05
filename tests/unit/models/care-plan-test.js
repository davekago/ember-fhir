import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-plan', 'Unit | Model | CarePlan', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:care-plan-activity',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});