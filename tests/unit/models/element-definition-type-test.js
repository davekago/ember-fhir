import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-type', 'Unit | Model | ElementDefinition_Type', {
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