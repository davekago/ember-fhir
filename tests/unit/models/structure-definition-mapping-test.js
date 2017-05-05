import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-definition-mapping', 'Unit | Model | StructureDefinition_Mapping', {
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