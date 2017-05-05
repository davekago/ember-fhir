import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-mapping', 'Unit | Model | ElementDefinition_Mapping', {
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