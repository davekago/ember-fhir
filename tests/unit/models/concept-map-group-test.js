import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-group', 'Unit | Model | ConceptMap_Group', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:concept-map-element',
    'model:concept-map-unmapped'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});