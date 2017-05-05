import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-base', 'Unit | Serializer | ElementDefinition_Base', {
  needs: [
    'serializer:element-definition-base',
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