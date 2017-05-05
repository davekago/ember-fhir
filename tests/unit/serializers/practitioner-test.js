import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner', 'Unit | Serializer | Practitioner', {
  needs: [
    'serializer:practitioner',
    'model:identifier',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:attachment',
    'model:practitioner-qualification',
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