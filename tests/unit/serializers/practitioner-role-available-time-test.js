import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-role-available-time', 'Unit | Serializer | PractitionerRole_AvailableTime', {
  needs: [
    'serializer:practitioner-role-available-time',
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