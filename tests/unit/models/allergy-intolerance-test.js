import { moduleForModel, test } from 'ember-qunit';

moduleForModel('allergy-intolerance', 'Unit | Model | AllergyIntolerance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:age',
    'model:period',
    'model:range',
    'model:annotation',
    'model:allergy-intolerance-reaction'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});