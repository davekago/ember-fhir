import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition-parameter', 'Unit | Model | OperationDefinition_Parameter', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:operation-definition-binding',
    'model:operation-definition-parameter'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});