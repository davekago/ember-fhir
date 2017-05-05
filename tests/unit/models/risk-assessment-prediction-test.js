import { moduleForModel, test } from 'ember-qunit';

moduleForModel('risk-assessment-prediction', 'Unit | Model | RiskAssessment_Prediction', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:range',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});