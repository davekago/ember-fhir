import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-component', 'Unit | Model | DeviceComponent', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:device-component-production-specification'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});