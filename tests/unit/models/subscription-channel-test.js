import { moduleForModel, test } from 'ember-qunit';

moduleForModel('subscription-channel', 'Unit | Model | Subscription_Channel', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});