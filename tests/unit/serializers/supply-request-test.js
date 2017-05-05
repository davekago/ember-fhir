import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-request', 'Unit | Serializer | SupplyRequest', {
  needs: [
    'serializer:supply-request',
    'model:identifier',
    'model:codeable-concept',
    'model:supply-request-ordered-item',
    'model:period',
    'model:timing',
    'model:supply-request-requester',
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