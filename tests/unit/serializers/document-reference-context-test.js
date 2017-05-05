import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-context', 'Unit | Serializer | DocumentReference_Context', {
  needs: [
    'serializer:document-reference-context',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:document-reference-related',
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