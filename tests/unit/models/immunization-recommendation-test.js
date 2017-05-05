import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation', 'Unit | Model | ImmunizationRecommendation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:immunization-recommendation-recommendation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});