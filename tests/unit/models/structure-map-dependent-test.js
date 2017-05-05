import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-dependent', 'Unit | Model | StructureMap_Dependent', {
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