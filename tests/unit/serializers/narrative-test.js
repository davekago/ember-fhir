import { moduleForModel, test } from 'ember-qunit';

moduleForModel('narrative', 'Unit | Serializer | Narrative', {
  needs: [
    'serializer:narrative',
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