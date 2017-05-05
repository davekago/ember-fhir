import { moduleForModel, test } from 'ember-qunit';

moduleForModel('appointment-response', 'Unit | Model | AppointmentResponse', {
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