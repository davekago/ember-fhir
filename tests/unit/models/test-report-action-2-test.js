import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-action-2', 'Unit | Model | TestReport_Action2', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-report-operation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});