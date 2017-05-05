import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-target', 'Unit | Model | ConceptMap_Target', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:concept-map-depends-on'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});