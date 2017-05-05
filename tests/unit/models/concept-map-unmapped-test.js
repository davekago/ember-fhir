import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-unmapped', 'Unit | Model | ConceptMap_Unmapped', {
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