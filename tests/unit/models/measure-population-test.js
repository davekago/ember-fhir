import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-population', 'Unit | Model | Measure_Population', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});