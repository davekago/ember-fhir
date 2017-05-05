import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group', 'Unit | Serializer | RequestGroup', {
  needs: [
    'serializer:request-group',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:annotation',
    'model:request-group-action',
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