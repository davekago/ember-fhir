import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-outcome-issue', 'Unit | Model | OperationOutcome_Issue', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});