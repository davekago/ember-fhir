import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group-related-action', 'Unit | Serializer | RequestGroup_RelatedAction', {
  needs: [
    'serializer:request-group-related-action',
    'model:duration',
    'model:range',
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