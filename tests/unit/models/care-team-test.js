import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-team', 'Unit | Model | CareTeam', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:care-team-participant',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});