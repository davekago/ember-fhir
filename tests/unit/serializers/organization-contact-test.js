import { moduleForModel, test } from 'ember-qunit';

moduleForModel('organization-contact', 'Unit | Serializer | Organization_Contact', {
  needs: [
    'serializer:organization-contact',
    'model:codeable-concept',
    'model:human-name',
    'model:contact-point',
    'model:address',
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