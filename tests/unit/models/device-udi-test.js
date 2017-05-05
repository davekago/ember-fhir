import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-udi', 'Unit | Model | Device_Udi', {
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