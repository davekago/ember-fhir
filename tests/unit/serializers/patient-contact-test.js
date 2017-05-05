import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient-contact', 'Unit | Serializer | Patient_Contact', {
  needs: [
    'serializer:patient-contact',
    'model:codeable-concept',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:reference',
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