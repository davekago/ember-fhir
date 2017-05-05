import { moduleForModel, test } from 'ember-qunit';

moduleForModel('enrollment-response', 'Unit | Serializer | EnrollmentResponse', {
  needs: [
    'serializer:enrollment-response',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
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