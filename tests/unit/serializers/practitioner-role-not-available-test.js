import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-role-not-available', 'Unit | Serializer | PractitionerRole_NotAvailable', {
  needs: [
    'serializer:practitioner-role-not-available',
    'model:period',
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