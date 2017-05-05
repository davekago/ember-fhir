import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-stratifier', 'Unit | Model | Measure_Stratifier', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});