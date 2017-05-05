import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation-date-criterion', 'Unit | Model | ImmunizationRecommendation_DateCriterion', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});