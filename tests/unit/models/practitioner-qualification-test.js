import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-qualification', 'Unit | Model | Practitioner_Qualification', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:period',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});