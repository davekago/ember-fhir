import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-process-note', 'Unit | Model | ExplanationOfBenefit_ProcessNote', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});