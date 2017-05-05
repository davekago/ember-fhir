import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-role', 'Unit | Serializer | PractitionerRole', {
  needs: [
    'serializer:practitioner-role',
    'model:identifier',
    'model:period',
    'model:reference',
    'model:codeable-concept',
    'model:contact-point',
    'model:practitioner-role-available-time',
    'model:practitioner-role-not-available',
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