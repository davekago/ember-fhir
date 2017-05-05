import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-parameter', 'Unit | Model | StructureMap_Parameter', {
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