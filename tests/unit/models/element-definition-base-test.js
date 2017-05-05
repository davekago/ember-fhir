import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-base', 'Unit | Model | ElementDefinition_Base', {
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