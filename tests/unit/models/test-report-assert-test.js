import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-assert', 'Unit | Model | TestReport_Assert', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});