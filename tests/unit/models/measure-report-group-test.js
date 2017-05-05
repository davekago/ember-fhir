import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-group', 'Unit | Model | MeasureReport_Group', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:measure-report-population',
    'model:measure-report-stratifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});