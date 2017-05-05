import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-structure', 'Unit | Model | StructureMap_Structure', {
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