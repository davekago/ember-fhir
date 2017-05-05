import { moduleForModel, test } from 'ember-qunit';

moduleForModel('coverage', 'Unit | Model | Coverage', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:coverage-grouping'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});