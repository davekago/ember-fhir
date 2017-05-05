import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-item', 'Unit | Model | ExplanationOfBenefit_Item', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:address',
    'model:reference',
    'model:quantity',
    'model:money',
    'model:explanation-of-benefit-adjudication',
    'model:explanation-of-benefit-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});