import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient-animal', 'Unit | Model | Patient_Animal', {
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