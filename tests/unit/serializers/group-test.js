import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group', 'Unit | Serializer | Group', {
  needs: [
    'serializer:group',
    'model:identifier',
    'model:codeable-concept',
    'model:group-characteristic',
    'model:group-member',
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