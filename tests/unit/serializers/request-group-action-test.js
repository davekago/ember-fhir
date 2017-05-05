import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group-action', 'Unit | Serializer | RequestGroup_Action', {
  needs: [
    'serializer:request-group-action',
    'model:codeable-concept',
    'model:related-artifact',
    'model:request-group-condition',
    'model:request-group-related-action',
    'model:period',
    'model:duration',
    'model:range',
    'model:timing',
    'model:reference',
    'model:coding',
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