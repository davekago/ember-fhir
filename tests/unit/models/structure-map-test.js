import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map', 'Unit | Model | StructureMap', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:structure-map-structure',
    'model:structure-map-group'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});