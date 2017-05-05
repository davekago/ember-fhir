import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient-link', 'Unit | Serializer | Patient_Link', {
  needs: [
    'serializer:patient-link',
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