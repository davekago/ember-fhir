import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-request-item', 'Unit | Model | ProcessRequest_Item', {
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