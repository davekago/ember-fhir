import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation-protocol', 'Unit | Model | ImmunizationRecommendation_Protocol', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});