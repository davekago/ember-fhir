import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-stratum', 'Unit | Model | MeasureReport_Stratum', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:measure-report-population-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});