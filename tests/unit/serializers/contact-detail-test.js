import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contact-detail', 'Unit | Serializer | ContactDetail', {
  needs: [
    'serializer:contact-detail',
    'model:contact-point',
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