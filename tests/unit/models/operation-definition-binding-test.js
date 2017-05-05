import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition-binding', 'Unit | Model | OperationDefinition_Binding', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});