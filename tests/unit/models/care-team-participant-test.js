import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-team-participant', 'Unit | Model | CareTeam_Participant', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});