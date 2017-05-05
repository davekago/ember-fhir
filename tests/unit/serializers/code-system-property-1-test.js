import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system-property-1', 'Unit | Serializer | CodeSystem_Property1', {
  needs: [
    'serializer:code-system-property-1',
    'model:coding',
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