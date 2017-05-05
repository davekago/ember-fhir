import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-action', 'Unit | Model | TestReport_Action', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-report-operation',
    'model:test-report-assert'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});