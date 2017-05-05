import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-teardown', 'Unit | Model | TestReport_Teardown', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-report-action-2'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});