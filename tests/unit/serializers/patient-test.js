import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient', 'Unit | Serializer | Patient', {
  needs: [
    'serializer:patient',
    'model:identifier',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:codeable-concept',
    'model:attachment',
    'model:patient-contact',
    'model:patient-animal',
    'model:patient-communication',
    'model:reference',
    'model:patient-link',
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