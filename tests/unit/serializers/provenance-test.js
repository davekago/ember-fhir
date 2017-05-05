import { moduleForModel, test } from 'ember-qunit';

moduleForModel('provenance', 'Unit | Serializer | Provenance', {
  needs: [
    'serializer:provenance',
    'model:reference',
    'model:period',
    'model:coding',
    'model:provenance-agent',
    'model:provenance-entity',
    'model:signature',
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