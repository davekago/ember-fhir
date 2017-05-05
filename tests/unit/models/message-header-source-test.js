import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header-source', 'Unit | Model | MessageHeader_Source', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-point'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});