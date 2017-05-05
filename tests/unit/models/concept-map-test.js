import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map', 'Unit | Model | ConceptMap', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:reference',
    'model:concept-map-group'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});