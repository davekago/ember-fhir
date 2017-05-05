import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-benefit-balance', 'Unit | Model | EligibilityResponse_BenefitBalance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:eligibility-response-financial'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});