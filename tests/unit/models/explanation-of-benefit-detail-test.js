import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-detail', 'Unit | Model | ExplanationOfBenefit_Detail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference',
    'model:explanation-of-benefit-adjudication',
    'model:explanation-of-benefit-sub-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});