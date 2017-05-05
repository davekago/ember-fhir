import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-group', 'Unit | Model | Measure_Group', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:measure-population',
    'model:measure-stratifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});