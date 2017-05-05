import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report', 'Unit | Model | TestReport', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:test-report-participant',
    'model:test-report-setup',
    'model:test-report-test',
    'model:test-report-teardown'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});