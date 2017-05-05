import { moduleForModel, test } from 'ember-qunit';

moduleForModel('backbone-element', 'Unit | Serializer | BackboneElement', {
  needs: [
    'serializer:backbone-element',
    'model:extension',
    'model:meta',
    'model:narrative',
    'model:resource'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});