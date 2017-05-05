import { moduleForModel, test } from 'ember-qunit';

moduleForModel('annotation', 'Unit | Serializer | Annotation', {
  needs: [
    'serializer:annotation',
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