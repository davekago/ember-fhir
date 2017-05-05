import { moduleForModel, test } from 'ember-qunit';

moduleForModel('enrollment-request', 'Unit | Serializer | EnrollmentRequest', {
  needs: [
    'serializer:enrollment-request',
    'model:identifier',
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