import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device-component-production-specification', 'Unit | Model | DeviceComponent_ProductionSpecification', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:identifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});