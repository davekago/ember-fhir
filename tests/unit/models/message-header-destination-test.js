import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-header-destination', 'Unit | Model | MessageHeader_Destination', {
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