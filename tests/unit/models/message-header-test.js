import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header', 'Unit | Model | MessageHeader', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:message-header-destination',
    'model:reference',
    'model:message-header-source',
    'model:codeable-concept',
    'model:message-header-response'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});