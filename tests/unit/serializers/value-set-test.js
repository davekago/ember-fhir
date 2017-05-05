import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set', 'Unit | Serializer | ValueSet', {
  needs: [
    'serializer:value-set',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:value-set-compose',
    'model:value-set-expansion',
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