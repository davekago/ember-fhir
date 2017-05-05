import { moduleForModel, test } from 'ember-qunit';

moduleForModel('subscription', 'Unit | Model | Subscription', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-point',
    'model:subscription-channel',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});