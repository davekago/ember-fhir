import { moduleForModel, test } from 'ember-qunit';

moduleForModel('referral-request-requester', 'Unit | Model | ReferralRequest_Requester', {
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