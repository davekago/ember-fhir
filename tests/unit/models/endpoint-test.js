import { moduleForModel, test } from 'ember-qunit';

moduleForModel('endpoint', 'Unit | Model | Endpoint', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:coding',
    'model:reference',
    'model:contact-point',
    'model:period',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});