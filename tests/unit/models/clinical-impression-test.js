import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clinical-impression', 'Unit | Model | ClinicalImpression', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:clinical-impression-investigation',
    'model:clinical-impression-finding',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});