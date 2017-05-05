import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contact-point', 'Unit | Serializer | ContactPoint', {
  needs: [
    'serializer:contact-point',
    'model:period',
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