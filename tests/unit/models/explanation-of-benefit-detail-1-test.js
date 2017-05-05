import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-detail-1', 'Unit | Model | ExplanationOfBenefit_Detail1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money',
    'model:explanation-of-benefit-adjudication'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});