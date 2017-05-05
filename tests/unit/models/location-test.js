import { moduleForModel, test } from 'ember-qunit';

moduleForModel('location', 'Unit | Model | Location', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:coding',
    'model:codeable-concept',
    'model:contact-point',
    'model:address',
    'model:location-position',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});