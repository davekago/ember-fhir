import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-hospitalization', 'Unit | Model | Encounter_Hospitalization', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});