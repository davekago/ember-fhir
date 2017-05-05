import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-benefit-balance', 'Unit | Model | ExplanationOfBenefit_BenefitBalance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:explanation-of-benefit-financial'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});