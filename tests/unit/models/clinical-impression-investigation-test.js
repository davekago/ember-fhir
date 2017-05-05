import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clinical-impression-investigation', 'Unit | Model | ClinicalImpression_Investigation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});