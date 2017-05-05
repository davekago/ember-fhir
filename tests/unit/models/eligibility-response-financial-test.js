import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-financial', 'Unit | Model | EligibilityResponse_Financial', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});