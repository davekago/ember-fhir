import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-element-mapping', 'Unit | Serializer | DataElement_Mapping', {
  needs: [
    'serializer:data-element-mapping',
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