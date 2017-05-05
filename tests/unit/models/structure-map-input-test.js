import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-input', 'Unit | Model | StructureMap_Input', {
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