import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-request-requester', 'Unit | Model | DeviceRequest_Requester', {
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