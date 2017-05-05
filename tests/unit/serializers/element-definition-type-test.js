import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-type', 'Unit | Serializer | ElementDefinition_Type', {
  needs: [
    'serializer:element-definition-type',
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