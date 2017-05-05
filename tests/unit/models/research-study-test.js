import { moduleForModel, test } from 'ember-qunit';

moduleForModel('research-study', 'Unit | Model | ResearchStudy', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:contact-detail',
    'model:related-artifact',
    'model:period',
    'model:annotation',
    'model:research-study-arm'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});