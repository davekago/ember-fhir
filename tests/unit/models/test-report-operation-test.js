import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-operation', 'Unit | Model | TestReport_Operation', {
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