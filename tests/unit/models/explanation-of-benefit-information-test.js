import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-information', 'Unit | Model | ExplanationOfBenefit_Information', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:quantity',
    'model:attachment',
    'model:reference',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});