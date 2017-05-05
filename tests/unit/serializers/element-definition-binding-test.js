import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-binding', 'Unit | Serializer | ElementDefinition_Binding', {
  needs: [
    'serializer:element-definition-binding',
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