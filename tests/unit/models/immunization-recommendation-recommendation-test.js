import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation-recommendation', 'Unit | Model | ImmunizationRecommendation_Recommendation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:immunization-recommendation-date-criterion',
    'model:immunization-recommendation-protocol',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});