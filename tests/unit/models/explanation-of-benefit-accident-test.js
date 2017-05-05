import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-accident', 'Unit | Model | ExplanationOfBenefit_Accident', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:address',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});