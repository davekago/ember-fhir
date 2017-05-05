import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-target', 'Unit | Model | StructureMap_Target', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:structure-map-parameter'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});