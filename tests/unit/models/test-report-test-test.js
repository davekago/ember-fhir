import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-test', 'Unit | Model | TestReport_Test', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-report-action-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});