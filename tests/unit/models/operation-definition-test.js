import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition', 'Unit | Model | OperationDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:reference',
    'model:operation-definition-parameter',
    'model:operation-definition-overload'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});