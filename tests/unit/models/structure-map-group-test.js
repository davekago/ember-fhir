import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-group', 'Unit | Model | StructureMap_Group', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:structure-map-input',
    'model:structure-map-rule'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});