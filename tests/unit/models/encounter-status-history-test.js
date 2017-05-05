import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-status-history', 'Unit | Model | Encounter_StatusHistory', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});