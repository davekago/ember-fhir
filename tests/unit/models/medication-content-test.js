import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-content', 'Unit | Model | Medication_Content', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});