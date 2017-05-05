import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-add-item', 'Unit | Model | ExplanationOfBenefit_AddItem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money',
    'model:explanation-of-benefit-adjudication',
    'model:explanation-of-benefit-detail-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});