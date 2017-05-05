import { moduleForModel, test } from 'ember-qunit';

moduleForModel('provenance-entity', 'Unit | Serializer | Provenance_Entity', {
  needs: [
    'serializer:provenance-entity',
    'model:reference',
    'model:identifier',
    'model:provenance-agent',
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