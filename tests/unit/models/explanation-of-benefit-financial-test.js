import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-financial', 'Unit | Model | ExplanationOfBenefit_Financial', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});