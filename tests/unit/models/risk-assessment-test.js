import { moduleForModel, test } from 'ember-qunit';

moduleForModel('risk-assessment', 'Unit | Model | RiskAssessment', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:risk-assessment-prediction'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});