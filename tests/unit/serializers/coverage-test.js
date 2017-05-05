import { moduleForModel, test } from 'ember-qunit';

moduleForModel('coverage', 'Unit | Serializer | Coverage', {
  needs: [
    'serializer:coverage',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:coverage-grouping',
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