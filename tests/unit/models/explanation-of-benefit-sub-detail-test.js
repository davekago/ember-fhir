import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-sub-detail', 'Unit | Model | ExplanationOfBenefit_SubDetail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference',
    'model:explanation-of-benefit-adjudication'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});