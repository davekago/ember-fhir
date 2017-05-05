import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-property', 'Unit | Serializer | CodeSystem_Property', {
  needs: [
    'serializer:code-system-property',
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