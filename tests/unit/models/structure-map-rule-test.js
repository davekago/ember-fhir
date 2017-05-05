import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-rule', 'Unit | Model | StructureMap_Rule', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:structure-map-source',
    'model:structure-map-target',
    'model:structure-map-rule',
    'model:structure-map-dependent'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});