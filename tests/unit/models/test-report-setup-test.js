import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-report-setup', 'Unit | Model | TestReport_Setup', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:test-report-action'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});