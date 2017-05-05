import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-slicing', 'Unit | Model | ElementDefinition_Slicing', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:element-definition-discriminator'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});