import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-request', 'Unit | Model | DeviceRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:timing',
    'model:device-request-requester',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});