import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-participant', 'Unit | Model | Encounter_Participant', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});