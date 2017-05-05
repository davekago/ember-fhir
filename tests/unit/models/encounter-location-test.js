import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-location', 'Unit | Model | Encounter_Location', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});