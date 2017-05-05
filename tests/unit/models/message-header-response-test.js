import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header-response', 'Unit | Model | MessageHeader_Response', {
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