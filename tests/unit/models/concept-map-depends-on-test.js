import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-depends-on', 'Unit | Model | ConceptMap_DependsOn', {
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