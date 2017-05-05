import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-concept', 'Unit | Serializer | ValueSet_Concept', {
  needs: [
    'serializer:value-set-concept',
    'model:value-set-designation',
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