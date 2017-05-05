import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition-overload', 'Unit | Model | OperationDefinition_Overload', {
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