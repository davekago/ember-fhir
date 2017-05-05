import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure-report', 'Unit | Model | MeasureReport', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:period',
    'model:measure-report-group'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});