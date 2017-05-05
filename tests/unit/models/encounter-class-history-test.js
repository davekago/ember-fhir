import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-class-history', 'Unit | Model | Encounter_ClassHistory', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});