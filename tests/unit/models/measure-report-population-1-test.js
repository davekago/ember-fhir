import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report-population-1', 'Unit | Model | MeasureReport_Population1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});