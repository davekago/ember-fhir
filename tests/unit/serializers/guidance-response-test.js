import { moduleForModel, test } from 'ember-qunit';

moduleForModel('guidance-response', 'Unit | Serializer | GuidanceResponse', {
  needs: [
    'serializer:guidance-response',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:annotation',
    'model:data-requirement',
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