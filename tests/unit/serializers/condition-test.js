import { moduleForModel, test } from 'ember-qunit';

moduleForModel('condition', 'Unit | Serializer | Condition', {
  needs: [
    'serializer:condition',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:age',
    'model:period',
    'model:range',
    'model:condition-stage',
    'model:condition-evidence',
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