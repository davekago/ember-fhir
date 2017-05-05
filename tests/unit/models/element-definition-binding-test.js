import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-binding', 'Unit | Model | ElementDefinition_Binding', {
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