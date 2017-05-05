import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-element', 'Unit | Model | ConceptMap_Element', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:concept-map-target'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});