import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-slicing', 'Unit | Serializer | ElementDefinition_Slicing', {
  needs: [
    'serializer:element-definition-slicing',
    'model:element-definition-discriminator',
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