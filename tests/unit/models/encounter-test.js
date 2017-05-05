import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter', 'Unit | Model | Encounter', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:encounter-status-history',
    'model:coding',
    'model:encounter-class-history',
    'model:codeable-concept',
    'model:reference',
    'model:encounter-participant',
    'model:period',
    'model:duration',
    'model:encounter-diagnosis',
    'model:encounter-hospitalization',
    'model:encounter-location'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});