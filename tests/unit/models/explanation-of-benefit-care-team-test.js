import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-care-team', 'Unit | Model | ExplanationOfBenefit_CareTeam', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});