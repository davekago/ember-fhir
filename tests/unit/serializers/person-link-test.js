import { moduleForModel, test } from 'ember-qunit';

moduleForModel('person-link', 'Unit | Serializer | Person_Link', {
  needs: [
    'serializer:person-link',
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