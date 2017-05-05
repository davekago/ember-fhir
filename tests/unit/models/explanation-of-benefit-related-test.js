import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-related', 'Unit | Model | ExplanationOfBenefit_Related', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept',
    'model:identifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});