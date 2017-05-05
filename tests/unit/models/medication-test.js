import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication', 'Unit | Model | Medication', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:medication-ingredient',
    'model:medication-package',
    'model:attachment'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});