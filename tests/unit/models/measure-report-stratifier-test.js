import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-stratifier', 'Unit | Model | MeasureReport_Stratifier', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:measure-report-stratum'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});