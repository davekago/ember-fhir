import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-outcome', 'Unit | Model | OperationOutcome', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:operation-outcome-issue'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});