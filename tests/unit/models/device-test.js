import { moduleForModel, test } from 'ember-qunit';

moduleForModel('device', 'Unit | Model | Device', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:device-udi',
    'model:codeable-concept',
    'model:reference',
    'model:contact-point',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});