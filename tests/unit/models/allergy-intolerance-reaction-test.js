import { moduleForModel, test } from 'ember-qunit';

moduleForModel('allergy-intolerance-reaction', 'Unit | Model | AllergyIntolerance_Reaction', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});