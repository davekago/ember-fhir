import { moduleForModel, test } from 'ember-qunit';

moduleForModel('organization', 'Unit | Serializer | Organization', {
  needs: [
    'serializer:organization',
    'model:identifier',
    'model:codeable-concept',
    'model:contact-point',
    'model:address',
    'model:reference',
    'model:organization-contact',
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