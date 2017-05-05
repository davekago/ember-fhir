import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-participant', 'Unit | Model | TestReport_Participant', {
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