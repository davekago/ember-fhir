import { moduleForModel, test } from 'ember-qunit';

moduleForModel('naming-system', 'Unit | Serializer | NamingSystem', {
  needs: [
    'serializer:naming-system',
    'model:contact-detail',
    'model:codeable-concept',
    'model:usage-context',
    'model:naming-system-unique-id',
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