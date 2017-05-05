import { moduleForModel, test } from 'ember-qunit';

moduleForModel('appointment-participant', 'Unit | Serializer | Appointment_Participant', {
  needs: [
    'serializer:appointment-participant',
    'model:codeable-concept',
    'model:reference',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});