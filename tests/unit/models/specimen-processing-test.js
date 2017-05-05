import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen-processing', 'Unit | Model | Specimen_Processing', {
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