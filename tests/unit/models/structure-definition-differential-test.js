import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-definition-differential', 'Unit | Model | StructureDefinition_Differential', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:element-definition'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});