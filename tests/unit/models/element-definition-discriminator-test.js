import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-discriminator', 'Unit | Model | ElementDefinition_Discriminator', {
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