import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-use-statement', 'Unit | Model | DeviceUseStatement', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:period',
    'model:timing',
    'model:codeable-concept',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});