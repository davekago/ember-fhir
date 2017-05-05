import { moduleForModel, test } from 'ember-qunit';

moduleForModel('goal', 'Unit | Serializer | Goal', {
  needs: [
    'serializer:goal',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:goal-target',
    'model:annotation',
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